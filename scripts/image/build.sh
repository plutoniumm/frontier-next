for ITR in {20..25}
do
# m = mode s.t 0 = combo (all shapes)
# a = alpha s.t 0 = auto select
# n = 100 shapes
	./primitive -i $ITR.jpg -o 0$ITR.svg -n 200 -m 0 -a 0;
	echo "$ITR Done";
done