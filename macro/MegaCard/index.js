
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MegaCard = factory());
})(this, (function () { 'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        if (value === null) {
            node.style.removeProperty(key);
        }
        else {
            node.style.setProperty(key, value, important ? 'important' : '');
        }
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.46.4' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    const time = ( val ) => {
        val = 0 | ( ( Date.now() - new Date( val ) ) / 1000 );

        let //
            unit,
            length = {
                second: 60,
                minute: 60,
                hour: 24,
                day: 7,
                week: 4.35,
                month: 12,
                year: 10000,
            },
            result;

        for ( unit in length ) {
            result = val % length[ unit ];
            if ( !( val = 0 | ( val / length[ unit ] ) ) )
                return result + " " + ( result - 1 ? unit + "s" : unit );
        }
    };

    const tags = ( html ) => {
        let tmp = document.createElement( "DIV" );
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    /* App.svelte generated by Svelte v3.46.4 */

    const { console: console_1 } = globals;
    const file = "App.svelte";

    function create_fragment(ctx) {
    	let div2;
    	let a;
    	let img0;
    	let img0_src_value;
    	let img0_alt_value;
    	let t0;
    	let div1;
    	let h5;
    	let t1_value = (tags(/*post*/ ctx[0].title) || "") + "";
    	let t1;
    	let t2;
    	let span0;
    	let t3;
    	let t4_value = (/*post*/ ctx[0].author || "") + "";
    	let t4;
    	let t5;
    	let p;
    	let t6_value = tags(/*post*/ ctx[0].description).slice(0, 230) + "";
    	let t6;
    	let t7;
    	let t8;
    	let div0;
    	let img1;
    	let img1_src_value;
    	let img1_alt_value;
    	let t9;
    	let span1;
    	let t10_value = /*post*/ ctx[0].name + "";
    	let t10;
    	let t11;
    	let span2;
    	let t12_value = time(/*post*/ ctx[0].pubDate) + "";
    	let t12;
    	let a_href_value;
    	let div2_id_value;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			a = element("a");
    			img0 = element("img");
    			t0 = space();
    			div1 = element("div");
    			h5 = element("h5");
    			t1 = text(t1_value);
    			t2 = space();
    			span0 = element("span");
    			t3 = text("by ");
    			t4 = text(t4_value);
    			t5 = space();
    			p = element("p");
    			t6 = text(t6_value);
    			t7 = text("...→");
    			t8 = space();
    			div0 = element("div");
    			img1 = element("img");
    			t9 = space();
    			span1 = element("span");
    			t10 = text(t10_value);
    			t11 = text(" •\n\t\t\t\t");
    			span2 = element("span");
    			t12 = text(t12_value);
    			attr_dev(img0, "class", "col-sm-3 mx-auto p-2 postImg");
    			if (!src_url_equal(img0.src, img0_src_value = /*post*/ ctx[0]?.enclosure.link || /*post*/ ctx[0]?.thumbnail)) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", img0_alt_value = /*post*/ ctx[0]?.default || "/icons/frontier.png");
    			attr_dev(img0, "onerror", "this.src=this.alt;this.onerror=null");
    			add_location(img0, file, 54, 2, 1227);
    			attr_dev(h5, "class", "text-uppercase p-0 m-0");
    			add_location(h5, file, 62, 3, 1486);
    			attr_dev(span0, "class", "card-min text-uppercase");
    			add_location(span0, file, 65, 3, 1563);
    			attr_dev(p, "class", "");
    			add_location(p, file, 67, 3, 1635);
    			attr_dev(img1, "class", "my-2 mr-2");
    			set_style(img1, "border-radius", "16px");
    			attr_dev(img1, "width", "32px");
    			attr_dev(img1, "height", "32px");
    			if (!src_url_equal(img1.src, img1_src_value = /*post*/ ctx[0].default)) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", img1_alt_value = tags(/*post*/ ctx[0].author));
    			add_location(img1, file, 69, 4, 1744);
    			attr_dev(span1, "class", "px-1");
    			add_location(span1, file, 77, 4, 1905);
    			attr_dev(span2, "class", "font-weight-normal px-1");
    			add_location(span2, file, 78, 4, 1949);
    			attr_dev(div0, "class", "card-min text-uppercase");
    			add_location(div0, file, 68, 3, 1702);
    			attr_dev(div1, "class", "col-sm-9 p-2 text-md-left †c m-0 text-dark");
    			add_location(div1, file, 61, 2, 1426);
    			attr_dev(a, "class", "row my-2");
    			attr_dev(a, "href", a_href_value = /*post*/ ctx[0].link || "#");
    			add_location(a, file, 53, 1, 1180);
    			attr_dev(div2, "class", "post col-md-12");
    			attr_dev(div2, "id", div2_id_value = /*post*/ ctx[0].guid);
    			add_location(div2, file, 52, 0, 1135);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, a);
    			append_dev(a, img0);
    			append_dev(a, t0);
    			append_dev(a, div1);
    			append_dev(div1, h5);
    			append_dev(h5, t1);
    			append_dev(div1, t2);
    			append_dev(div1, span0);
    			append_dev(span0, t3);
    			append_dev(span0, t4);
    			append_dev(div1, t5);
    			append_dev(div1, p);
    			append_dev(p, t6);
    			append_dev(p, t7);
    			append_dev(div1, t8);
    			append_dev(div1, div0);
    			append_dev(div0, img1);
    			append_dev(div0, t9);
    			append_dev(div0, span1);
    			append_dev(span1, t10);
    			append_dev(div0, t11);
    			append_dev(div0, span2);
    			append_dev(span2, t12);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*post*/ 1 && !src_url_equal(img0.src, img0_src_value = /*post*/ ctx[0]?.enclosure.link || /*post*/ ctx[0]?.thumbnail)) {
    				attr_dev(img0, "src", img0_src_value);
    			}

    			if (dirty & /*post*/ 1 && img0_alt_value !== (img0_alt_value = /*post*/ ctx[0]?.default || "/icons/frontier.png")) {
    				attr_dev(img0, "alt", img0_alt_value);
    			}

    			if (dirty & /*post*/ 1 && t1_value !== (t1_value = (tags(/*post*/ ctx[0].title) || "") + "")) set_data_dev(t1, t1_value);
    			if (dirty & /*post*/ 1 && t4_value !== (t4_value = (/*post*/ ctx[0].author || "") + "")) set_data_dev(t4, t4_value);
    			if (dirty & /*post*/ 1 && t6_value !== (t6_value = tags(/*post*/ ctx[0].description).slice(0, 230) + "")) set_data_dev(t6, t6_value);

    			if (dirty & /*post*/ 1 && !src_url_equal(img1.src, img1_src_value = /*post*/ ctx[0].default)) {
    				attr_dev(img1, "src", img1_src_value);
    			}

    			if (dirty & /*post*/ 1 && img1_alt_value !== (img1_alt_value = tags(/*post*/ ctx[0].author))) {
    				attr_dev(img1, "alt", img1_alt_value);
    			}

    			if (dirty & /*post*/ 1 && t10_value !== (t10_value = /*post*/ ctx[0].name + "")) set_data_dev(t10, t10_value);
    			if (dirty & /*post*/ 1 && t12_value !== (t12_value = time(/*post*/ ctx[0].pubDate) + "")) set_data_dev(t12, t12_value);

    			if (dirty & /*post*/ 1 && a_href_value !== (a_href_value = /*post*/ ctx[0].link || "#")) {
    				attr_dev(a, "href", a_href_value);
    			}

    			if (dirty & /*post*/ 1 && div2_id_value !== (div2_id_value = /*post*/ ctx[0].guid)) {
    				attr_dev(div2, "id", div2_id_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let post;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let { url } = $$props;

    	// Promise.all( blogs ).then( ( posts ) => {
    	// 	const articles = posts
    	// 		.map( e => {
    	// 			e.items?.forEach( p => (
    	// 				p.default = e.feed.image,
    	// 				p.name = e.feed.title.replace( 'Stories by ', '' ).replace( 'on Medium', '' ) || "Untitled",
    	// 				p.pubDate = p.pubDate.replace( ' ', 'T' ) + 'Z' || Date.now()
    	// 			) );
    	// 			return e.items;
    	// 		} )
    	// 		.flat( 1 )
    	// 		.slice( 0, 30 )
    	// 		.sort( ( a, b ) => new Date( b.pubDate ) - new Date( a.pubDate ) )
    	// 		.map( e=> new MegaCard({
    	// 				target: document.querySelector('#digestor'),
    	// 				props: {post: e}
    	// 			}));
    	// } );
    	console.log(url);

    	onMount(() => fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`).then(d => d.json()).then(resp => {
    		console.log(resp);
    		$$invalidate(0, post = resp);
    	}));

    	const writable_props = ['url'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('url' in $$props) $$invalidate(1, url = $$props.url);
    	};

    	$$self.$capture_state = () => ({ time, tags, onMount, url, post });

    	$$self.$inject_state = $$props => {
    		if ('url' in $$props) $$invalidate(1, url = $$props.url);
    		if ('post' in $$props) $$invalidate(0, post = $$props.post);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*url*/ 2) {
    			$$invalidate(0, post = {
    				name: "",
    				guid: "",
    				default: "",
    				title: "",
    				thumbnail: "",
    				enclosure: { link: "" },
    				link: url,
    				content: "",
    				description: "",
    				author: "",
    				pubDate: Date.now()
    			});
    		}
    	};

    	return [post, url];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, { url: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*url*/ ctx[1] === undefined && !('url' in props)) {
    			console_1.warn("<App> was created without expected prop 'url'");
    		}
    	}

    	get url() {
    		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set url(value) {
    		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    return App;

}));
