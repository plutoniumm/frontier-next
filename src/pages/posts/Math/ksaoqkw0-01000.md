---
layout: 'layout:post'
---

I've included here some of the less obvious mistakes that people make while dealing with data. The common ones like look for whats missing, publication bias, logarithmic mind etc etc were to well known so I thought them to be redundant to be mentioned here. This is not how to do statistics by any means, please take a Stats course for that. This is only how to interact with data in our modern hyper connected world as the amount of data we receive per day keeps going up.

## Beware of Averages & Extremes
If statistics were as easy as average and maxima minima then we would not have had a million parameters to analyse each dataset from every possible angle; Mean, Variance, Standard Deviation, Confidence Interval, Correlation, Covariance etc etc the list just keeps getting longer. So how to use what and when to use?

When it makes sense to say that people are close to the average and largely represent the whole set it is fair to say averages are a safe enough metric so long as the extremes aren't very far away from the average. In a classroom averages are great, across a grade a little less and in the whole school an absolute disaster.

It's also worth pointing out that this example gives us a great segway into another condition for using averages. The data must be similar enough. Inside a classroom the environment is largely consistent with same teachers and similar peers. In the whole school even the curriculum is not same so averages have no meaning. A more extreme example would be to say that gun violence kills an average of X amount of people and suicides kill Y. While these are sound very similar and may even be correlated and further even causative on top of all that, it is still not possible to compare one against the other since they are harboured and nourished in very different environments, solutions for one will not (generally) work for the other.

With that said averages may be of multiple types the most popular one is the tradition sum / count weighted average. When estimating large variation data sets we may often fallback to Geometric means. For example [Wars & anthropogenic disasters by death toll](https://en.wikipedia.org/wiki/List_of_wars_and_anthropogenic_disasters_by_death_toll#List_of_political_leaders_and_regimes_by_death_toll) uses Geometric means to study datasets with very large variation. The most useful averages overall are Arithmetic Weighted, Geometric, Root Mean Square.

It is worth pointing out that in the general world most people are not at the extremes and for all natural phenomena (or equivalently free market phenomena) will be distributed such that the majority of people are bunched in the middle ~70%. People are almost never at the extremes. If there are too many people in the extremes and not many in the middle, its worth breaking the dataset into two parts appropriately and treat them as different groups all-together.

## Extrapolation
*Discussed also below in Identifying Data Charlatans*

Done assume extrapolation is linear. It may be logarithmic, Sigmoid, super or sub linear. Consider something extremely common, earthquakes. If you have seen a 7 scale and an 8 scale. You cannot say the 9 is as far away from 8 as the 8 is far from 7. Its simply not true. The Earthquakes scale is logarithmic, which means the 8 is 10 times that of 7 and the 9 is 10 times that of 8. If we use linear extrapolation then the 9 would turn out to be just 2 times distance away from 7 as from 8 as opposed to being 100 times worse. I need not give an example for Exponential as I think over the past 1 year we have seen enough of that already.

Don't extrapolate beyond the extremes, its stupid. Its the first rule of statistics. Your data trends MAY NOT and SHOULD NOT hold beyond the maximum and minimum values you know of. If you know how 6-20 people will behave in an auction. You CANNOT conclude from that data how 100 people will behave now how 1 person will. You may use your common sense and experience to estimate, but the data will not do you much good.

If something happened to you also does not mean its a generic trend. Its unfortunate that you or someone around you had a divorce. But in general divorce rates are reducing every year steadily. Don't project your situation on the world, there are therapists for that. This also applies at the other end, you are not immune to statistics. If the generic divorce rate around you is 60% (say), then it is also 60% for you too, you are not better than anyone. Its great to stay optimistic, it keeps things smooth, but don't confuse your optimism for the truth.

More news also does not imply more suffering. We live in a hyper connected world and therefore news gets to us much faster. You know more relatives, celebrities and buisnesspeople who have been divorced does not mean its more people. Or a classic case is that we get much more news of disappearances of ships and plances in the bermuda triangle when in fact the rate of disappearances from there is the same as any other location in the sea as backed up insurance companies who don't charge extra premium to ships passing through there.

## Sensationalisation
Often data is quoted to be sensational and not really informative. So for example things like 'most', 'majority' etc these can mean anything from '50.01%' to '99.99%'. They convey virtually no information. So for example 'most' seats in indian education are reserved. But we know from experience that its barely 50.5%. We also know the sun DOES NOT rise in the east and set in the west for most of the year and this one is actually for 99.5% (363) of the days.

Good News has never been News, neither has gradual improvement, we tend to notice the dips more than the trendline. During the Great Leap forward by Chairman Mao the global life expectancy plunged down head first suddenly. So while it was a very unfortunate event and caused great deal damage, it does not represent the trendline. People in the world overall are living for longer and longer year by year. The world is by every metric getting better, things are more safe, people are living longer, people are more peaceful and unified etc.

News is always made to make you jump to conclusions. Take a minute to think before you do so, evaluate the meaning carefully. Things can mean very different things. Ex. Women are more likely to commit suicide. But. Men are more likely to kill themselves. In an everyday scenario you will believe when told individually both of these. But when put together you can see that they mean very different things which you won't notice normally. *The explanation btw is that men usually tend to use blunt force to do so as a result of which death is more assured*

Don't look at any number in isolation. Always compare it to another relevant data point. For example as per Angela Duckworth (in *Grit*) 98% of all people who pass the grit scale complete a given military camp (Beast Barracks). But what is the general data? Well it turns out 95% of ALL people complete the camp, so a 3% improvement is not much of an indicator really is it, its just random fluctuation added onto basic persistence. Always have a base case or a 'control' to compare against to understand what the data really means. For example Mao killed 70M people. How much is that really? Thats 10M more than Genghis Khan and Dynasty or almost 3 times Hitler or 5 times Stalin or maybe as much as the lower estimate of the Black Death (the worst epidemic in recorded history of mankind).

Find context whenever you can. If in a year say ~9000 people died because of for example by being stomped over. That can be easily reported as '1 person dies every hour in a stampede'. Despite the fact that the actual truth could be something like, there were large scale riots in the country for a total of 4 days so a lot of people died due to being stepped over in there. While the data point is the same, how we register it in our mind is very different. Context is key.

When unclear of an absolute value break the numbers down to a relative scale of per person or per day and so on, absolute numbers usually don't mean anything unless they're something like death toll. For example Norway and Philippines both have about the same GDP of 400,000M USD. But that doesn't really tell us anything till we see what that means per person. In Norway its 82K USD per person and 3.5K per person in philippines, now thats a vast difference isn't it? Breaking down absolute group values into relative individual values is often more easy to understand what the numbers actually mean.

## Update Yourself
Watch out for gradual change. 1 year is a very short time, keep updating yourself. What you learnt in school has a VERY VERY LOW probability of being the same now. Just ask your dad, or even your grandfather for context. What they learned about world economies is very different from what the scene is today. When your grandfather was studying Russia probably had a famine. When your father was studying then US had probably just landed on the moon in the cold war. When you were studying you will probably see is that Russia is the only country that makes US think before doing something. Things change very fast.

The most simple idea and solution is not always the best solution. Visionaries have often used simple utopian ideas to justify unforgivable actions. Life is complicated, deal with it. Things are always not as simple as 10 rules to do ABC. Or 5 rules to save money. Or 2 rules to be a millionaire. While Buzzfeed may sound like it, its unfortunately not true. Life is nuanced and complicated. Take your time to figure out what numbers actually mean. For example 'Violence against XYZ community'. What does Violence really mean? One country may say its only people who are killed, one may say no we also include people who were beaten up, one may say we include any form of assualt or physical attack and finally one may say we include any and every form of  aggression. These are all vastly different concepts all under the umbrella of 'Violence'. Find out what it means when someone says something, we may often misinterpret sentences made vaguely. Ask more questions.

Insist on more data always, don't take an urgency reaction, it may lead to a drastic action. Beware of fortune tellers. We have been wrong about the future almost always without fail. If someone tells you that if you don't do some P task some Q bad thing will happen tomorrow. Like say, transfer me 1 million right now because the market is gonna crash tomorrow and I can immunize you against it. This sounds very obviously fake, but things are not always so obvious. Without looking for more explanation and details we may take hasty actions with dire consequences. Its worth spending say 15 more minutes on any decision with some meaning to it. Or 1 hour more for critical ones. Why would you want to spend more time in deciding which maggi you want in the store (both of which are 20 rs) over which school you want to go to (which is at least 1000 times more expensive). Things which are of greater value should deserve more thought, ask for more data, explanations, sources & citations. Evaluate your consequences, do a risk analysis.

## Identifying Data Charlatans
[Read More](https://towardsdatascience.com/how-to-spot-a-data-charlatan-85785c991433) \
[How to lie with Data](https://twitter.com/MaartenvSmeden/status/1262854476576194566) \
Understand that analyst and statistician are two very different jobs.
While statisticians are trained in inferring what’s beyond their data, analysts are trained in exploring the contents of their dataset. Analysts make conclusions about what’s in their data, they ask good questions, they *generate* great hypotheses while statisticians make conclusions about what isn’t in their data, they give great answers, they *test* the hypotheses.

A core principle of data science is that if you’re dealing with uncertainty, it’s not valid to use the same datapoint for both hypothesis generation and for testing. Whenever charlatans find a pattern, get inspired, then test the same data for that same pattern to publish the result with a legitimizing p-value or two next to their theory, they’re effectively lying to you. This p value has no meaning unless the hypothesis or at the very least an expected behaviour was made before looking at the data. Otherwise its equivalent to saying that I look at the sky and that cloud looks like the face of Gandhi to me. This is all riddled with hindsight bias.

When doing an argument remember the fancy trick of: Ok so you're saying ABC is true in all cases 100%? Yes. So then why is it not true in XYZ case?
Yes this may sound very rude and deliberately manipulative but its more of what we need. Some amount of data should always be hidden from sight to make a solid conclusion. We can all take a page from the Machine Learning Engineers page and do an 80-20 split for hypothesis generation and testing.

With that said. Try to keep things realistic. There are some things outside the realm of the other. Stock market can do well with analytics, we can safely explain why things happened. But we cannot do any statistical predictions with it, they will tend to largely be lucky guesses or half wrong if not explicitly obvious.

> Charlatans have successfully predicted 9 out of the last 5 recessions. ~ Paul Samuelson

## Some Recommended Readings

| Author  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Title                   |
|----------|-------|-----------------------------|
| Matt Parker |     |  Humble Pi                   |
| Hans Rosling   |  |  Factfullness                |
| Tim Harford    |  |  The Data Detective          |
| Cathy O'Neil    | |  Weapons of Math Destruction |
| Daniel Kahneman | |  Thinking Fast and Slow      |