var map = {
    title: "Arithmetic",
    song: "env2",
    maker: "David Ye",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-6.999930000000001, 0.00007000000000000001, -239.99992999999998], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([21.000140000000002, 0.00014000000000000001, -39.99986], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([7.000209999999999, 0.00021, -139.99979], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([7.00028, 0.00028000000000000003, -39.99972], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([21.000349999999997, 0.00035000000000000005, -139.99965], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([-6.99958, 0.00042, -139.99958], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([-20.99951, 0.00049, -239.99951000000001], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([21, 0, -240], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([7.000069999999999, 0.00007000000000000001, -339.99993], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([21.000140000000002, 0.00014000000000000001, -339.99985999999996], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([-20.999789999999997, 0.00021, -339.99979], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([7.00028, 0.00028000000000000003, -39.99972], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([-20.999650000000003, 0.00035000000000000005, -39.99965], [0, 0, 0], [10, 2, 10], "1", 10000.0, 0, 0.6, false, false);
        a.p([19.00042, 0.05042, -239.99957999999998], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([21.00049, 0.05049000000000001, -39.99951], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([-7, 0.05, -43], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([4.50007, 0.050069999999999996, -41.499930000000006], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-20.999859999999998, 0.050140000000000004, -39.99986], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([18.50021, 0.05021, -138.49979], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([21.000279999999997, 0.05028, -142.99972], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([7.00035, 0.05035, -37.49965], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-9.49958, 0.05042, -41.499579999999995], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([7.00049, 0.05049000000000001, -39.99951], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-7, 0.05, -37.5], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-23.49993, 0.050069999999999996, -39.99993], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([9.50014, 0.050140000000000004, -38.49986], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([7.000209999999999, 0.05021, -141.99979], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([21.000279999999997, 0.05028, -139.99972], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-6.99965, 0.05035, -137.49965], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-23.49958, 0.05042, -39.99958], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([-4.49951, 0.05049000000000001, -141.49951], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([7, 0.05, -43], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([21.00007, 0.050069999999999996, -137.49993], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-6.99986, 0.050140000000000004, -39.99986], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-9.49979, 0.05021, -38.49979], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-22.999720000000003, 0.05028, -139.99972], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([-6.99965, 0.05035, -142.99965], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([23.50042, 0.05042, -141.49958], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-9.49951, 0.05049000000000001, -141.49951], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-9.5, 0.05, -138.5], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-18.49993, 0.050069999999999996, -41.499930000000006], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-4.49986, 0.050140000000000004, -138.49986], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-6.999790000000001, 0.05021, -139.99979], [0, 0, 0], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-18.99972, 0.05028, -139.99972], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([4.00035, 0.05035, -138.99965], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([9.00042, 0.05042, -236.99957999999998], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-18.99951, 0.05049000000000001, -242.99951000000001], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([24, 0.05, -238.5], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([8.00007, 0.050069999999999996, -241.49992999999998], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([20.00014, 0.050140000000000004, -241.49986], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([23.000210000000003, 0.05021, -239.99979], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([18.00028, 0.05028, -239.99972000000002], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([9.00035, 0.05035, -239.99965], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([22.00042, 0.05042, -241.49957999999998], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([8.00049, 0.05049000000000001, -238.49951000000001], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([5, 0.05, -243], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-4.99993, 0.050069999999999996, -236.99992999999998], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([5.00014, 0.050140000000000004, -236.99986], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([23.000210000000003, 0.05021, -242.99979], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([4.00028, 0.05028, -241.49972000000002], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([5.00035, 0.05035, -239.99965], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([6.00042, 0.05042, -238.49957999999998], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([23.00049, 0.05049000000000001, -236.99951000000001], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-5, 0.05, -243], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-5.999930000000001, 0.050069999999999996, -238.49992999999998], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-4.99986, 0.050140000000000004, -239.99986], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-7.999790000000001, 0.05021, -239.99979], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([-9.99972, 0.05028, -238.49972000000002], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-18.99965, 0.05035, -239.99965], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-19.99958, 0.05042, -241.49957999999998], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([9.00049, 0.05049000000000001, -242.99951000000001], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-19, 0.05, -237], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-3.99993, 0.050069999999999996, -239.99992999999998], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([-22.999859999999998, 0.050140000000000004, -236.99986], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-23.999789999999997, 0.05021, -241.49979], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-22.999720000000003, 0.05028, -239.99972000000002], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-19.99965, 0.05035, -238.49965], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-17.99958, 0.05042, -239.99957999999998], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([-22.99951, 0.05049000000000001, -242.99951000000001], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-9, 0.05, -237], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-9.99993, 0.050069999999999996, -241.49992999999998], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-8.99986, 0.050140000000000004, -239.99986], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-23.999789999999997, 0.05021, -238.49979], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-21.999720000000003, 0.05028, -239.99972000000002], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([-8.99965, 0.05035, -242.99965], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-5.99958, 0.05042, -339.99958], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([24.00049, 0.05049000000000001, -341.49951], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([23, 0.05, -340], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([9.00007, 0.050069999999999996, -339.99993], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([10.00014, 0.050140000000000004, -341.49985999999996], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([8.00021, 0.05021, -339.99979], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([-8.99972, 0.05028, -342.99972], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-9.99965, 0.05035, -338.49965], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([22.00042, 0.05042, -339.99958], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([-18.99951, 0.05049000000000001, -339.99951], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-18, 0.05, -341.5], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-19.99993, 0.050069999999999996, -339.99993], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([19.00014, 0.050140000000000004, -339.99985999999996], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([4.00021, 0.05021, -339.99979], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([5.00028, 0.05028, -342.99972], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([5.00035, 0.05035, -336.99965], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([5.00042, 0.05042, -339.99958], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-22.99951, 0.05049000000000001, -342.99951], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-24, 0.05, -340], [0, 0, 0], [1, 2, 6], "2.0", 0, 0, 0.6, false, false);
        a.p([-4.99993, 0.050069999999999996, -339.99993], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-4.99986, 0.050140000000000004, -339.99985999999996], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-4.99979, 0.05021, -339.99979], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-3.99972, 0.05028, -341.49972], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([-8.99965, 0.05035, -336.99965], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-8.99958, 0.05042, -339.99958], [0, 0, 0], [3, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([-7.99951, 0.05049000000000001, -341.49951], [0, 0, 0], [1, 2, 3], "2.0", 0, 0, 0.6, false, false);
        a.p([0, 7, -25], [0, 0.79, 0], [50, 2, 20], "3.0", 0, 0, 0.6, false, false);
        a.p([0.00007000000000000001, 7.000069999999999, -124.99993], [0, 0.79, 0], [50, 2, 20], "3.0", 0, 0, 0.6, false, false);
        a.p([0.00014000000000000001, 7.00014, -224.99986], [0, 0.79, 0], [50, 2, 20], "3.0", 0, 0, 0.6, false, false);
        a.p([0.00021, 7.000209999999999, -324.99979], [0, 0.79, 0], [50, 2, 20], "3.0", 0, 0, 0.6, false, false);
        a.p([-21, 0, -140], [0, 0, 0], [10, 2, 10], "1", 0, 0, 0.6, false, false);
        a.p([7.000069999999999, 0.00007000000000000001, -39.99993], [0, 0, 0], [10, 2, 10], "1", 0, 0, 0.6, false, false);
        a.p([0.00014000000000000001, 0.00014000000000000001, -7.99986], [0, 0, 0], [50, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([-6.999790000000001, 7.000209999999999, -51.999790000000004], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([7.00028, 7.00028, -51.999719999999996], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([-20.999650000000003, 7.00035, -51.99965], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([21.00042, 7.00042, -51.999579999999995], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([0.00049, 0.00049, -89.99950999999999], [0, 0, 0], [50, 2, 60], "1", 0, 0, 0.6, false, false);
        a.p([0, 0, -290], [0, 0, 0], [50, 2, 60], "1", 0, 0, 0.6, false, false);
        a.p([21.00007, 7.000069999999999, -151.99993], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([-20.999859999999998, 7.00014, -151.99986], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([7.000209999999999, 7.000209999999999, -151.99979], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([-6.99972, 7.00028, -151.99972], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([7.00035, 0.00035000000000000005, -39.99965], [0, 0, 0], [10, 2, 10], "1", 0, 0, 0.6, false, false);
        a.p([-6.99958, 0.00042, -39.99958], [0, 0, 0], [10, 2, 10], "1", 0, 0, 0.6, false, false);
        a.p([-6.99951, 7.00049, -251.99951000000001], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([7, 7, -252], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([-20.99993, 7.000069999999999, -251.99992999999998], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([21.000140000000002, 7.00014, -251.99986], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([0.00021, 0.00021, -189.99979], [0, 0, 0], [50, 2, 60], "1", 0, 0, 0.6, false, false);
        a.p([21.000279999999997, 7.00028, -351.99972], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([-20.999650000000003, 7.00035, -351.99965], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([7.00042, 7.00042, -351.99958], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([-6.99951, 7.00049, -351.99951], [0, 0.79, 0], [10, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([-7, 0, -340], [0, 0, 0], [10, 2, 10], "1", 0, 0, 0.6, false, false);
        a.p([0.00007000000000000001, 0.00007000000000000001, -389.99993], [0, 0, 0], [50, 2, 60], "1", 0, 0, 0.6, false, false);
        a.p([7.00014, 0.00014000000000000001, -39.99986], [0, 0, 0], [10, 2, 10], "1", 0, 0, 0.6, false, false);
        a.p([7.000209999999999, 0.00021, -239.99979], [0, 0, 0], [10, 2, 10], "1", 0, 0, 0.6, false, false);
        a.p([7.00028, 0.00028000000000000003, -39.99972], [0, 0, 0], [10, 2, 10], "1", 0, 0, 0.6, false, false);
        a.e([0.00035000000000000005, 2.00035, -419.99965]);
    },
    post: function() {
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < 0.000280000000000058) {
                    a.msg_set("12 x 0.25 ");
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -29.99972) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -99.99965) {
                    a.msg_set("44 / 4 ");
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -129.99965) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -199.99951000000001) {
                    a.msg_set("8 x 8 / 2 ");
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -229.99951000000001) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -299.99958) {
                    a.msg_set("6 x 7 + 3 ");
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -329.99958) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-6.999930000000001, 0.00007000000000000001, -239.99992999999998], [0, 0, 0], [10, 2, 10]);
        a.re('P1', [21.000140000000002, 0.00014000000000000001, -39.99986], [0, 0, 0], [10, 2, 10]);
        a.re('P2', [7.000209999999999, 0.00021, -139.99979], [0, 0, 0], [10, 2, 10]);
        a.re('P3', [7.00028, 0.00028000000000000003, -39.99972], [0, 0, 0], [10, 2, 10]);
        a.re('P4', [21.000349999999997, 0.00035000000000000005, -139.99965], [0, 0, 0], [10, 2, 10]);
        a.re('P5', [-6.99958, 0.00042, -139.99958], [0, 0, 0], [10, 2, 10]);
        a.re('P6', [-20.99951, 0.00049, -239.99951000000001], [0, 0, 0], [10, 2, 10]);
        a.re('P7', [21, 0, -240], [0, 0, 0], [10, 2, 10]);
        a.re('P8', [7.000069999999999, 0.00007000000000000001, -339.99993], [0, 0, 0], [10, 2, 10]);
        a.re('P9', [21.000140000000002, 0.00014000000000000001, -339.99985999999996], [0, 0, 0], [10, 2, 10]);
        a.re('P10', [-20.999789999999997, 0.00021, -339.99979], [0, 0, 0], [10, 2, 10]);
        a.re('P11', [7.00028, 0.00028000000000000003, -39.99972], [0, 0, 0], [10, 2, 10]);
        a.re('P12', [-20.999650000000003, 0.00035000000000000005, -39.99965], [0, 0, 0], [10, 2, 10]);
        a.re('P13', [19.00042, 0.05042, -239.99957999999998], [0, 0, 0], [3, 2, 1]);
        a.re('P14', [21.00049, 0.05049000000000001, -39.99951], [0, 0, 0], [1, 2, 6]);
        a.re('P15', [-7, 0.05, -43], [0, 0, 0], [6, 2, 1]);
        a.re('P16', [4.50007, 0.050069999999999996, -41.499930000000006], [0, 0, 0], [1, 2, 3]);
        a.re('P17', [-20.999859999999998, 0.050140000000000004, -39.99986], [0, 0, 0], [6, 2, 1]);
        a.re('P18', [18.50021, 0.05021, -138.49979], [0, 0, 0], [1, 2, 3]);
        a.re('P19', [21.000279999999997, 0.05028, -142.99972], [0, 0, 0], [6, 2, 1]);
        a.re('P20', [7.00035, 0.05035, -37.49965], [0, 0, 0], [6, 2, 1]);
        a.re('P21', [-9.49958, 0.05042, -41.499579999999995], [0, 0, 0], [1, 2, 3]);
        a.re('P22', [7.00049, 0.05049000000000001, -39.99951], [0, 0, 0], [6, 2, 1]);
        a.re('P23', [-7, 0.05, -37.5], [0, 0, 0], [6, 2, 1]);
        a.re('P24', [-23.49993, 0.050069999999999996, -39.99993], [0, 0, 0], [1, 2, 6]);
        a.re('P25', [9.50014, 0.050140000000000004, -38.49986], [0, 0, 0], [1, 2, 3]);
        a.re('P26', [7.000209999999999, 0.05021, -141.99979], [0, 0, 0], [6, 2, 1]);
        a.re('P27', [21.000279999999997, 0.05028, -139.99972], [0, 0, 0], [6, 2, 1]);
        a.re('P28', [-6.99965, 0.05035, -137.49965], [0, 0, 0], [6, 2, 1]);
        a.re('P29', [-23.49958, 0.05042, -39.99958], [0, 0, 0], [1, 2, 6]);
        a.re('P30', [-4.49951, 0.05049000000000001, -141.49951], [0, 0, 0], [1, 2, 3]);
        a.re('P31', [7, 0.05, -43], [0, 0, 0], [6, 2, 1]);
        a.re('P32', [21.00007, 0.050069999999999996, -137.49993], [0, 0, 0], [6, 2, 1]);
        a.re('P33', [-6.99986, 0.050140000000000004, -39.99986], [0, 0, 0], [6, 2, 1]);
        a.re('P34', [-9.49979, 0.05021, -38.49979], [0, 0, 0], [1, 2, 3]);
        a.re('P35', [-22.999720000000003, 0.05028, -139.99972], [0, 0, 0], [1, 2, 6]);
        a.re('P36', [-6.99965, 0.05035, -142.99965], [0, 0, 0], [6, 2, 1]);
        a.re('P37', [23.50042, 0.05042, -141.49958], [0, 0, 0], [1, 2, 3]);
        a.re('P38', [-9.49951, 0.05049000000000001, -141.49951], [0, 0, 0], [1, 2, 3]);
        a.re('P39', [-9.5, 0.05, -138.5], [0, 0, 0], [1, 2, 3]);
        a.re('P40', [-18.49993, 0.050069999999999996, -41.499930000000006], [0, 0, 0], [1, 2, 3]);
        a.re('P41', [-4.49986, 0.050140000000000004, -138.49986], [0, 0, 0], [1, 2, 3]);
        a.re('P42', [-6.999790000000001, 0.05021, -139.99979], [0, 0, 0], [6, 2, 1]);
        a.re('P43', [-18.99972, 0.05028, -139.99972], [0, 0, 0], [1, 2, 6]);
        a.re('P44', [4.00035, 0.05035, -138.99965], [0, 0, 0], [1, 2, 6]);
        a.re('P45', [9.00042, 0.05042, -236.99957999999998], [0, 0, 0], [3, 2, 1]);
        a.re('P46', [-18.99951, 0.05049000000000001, -242.99951000000001], [0, 0, 0], [3, 2, 1]);
        a.re('P47', [24, 0.05, -238.5], [0, 0, 0], [1, 2, 3]);
        a.re('P48', [8.00007, 0.050069999999999996, -241.49992999999998], [0, 0, 0], [1, 2, 3]);
        a.re('P49', [20.00014, 0.050140000000000004, -241.49986], [0, 0, 0], [1, 2, 3]);
        a.re('P50', [23.000210000000003, 0.05021, -239.99979], [0, 0, 0], [3, 2, 1]);
        a.re('P51', [18.00028, 0.05028, -239.99972000000002], [0, 0, 0], [1, 2, 6]);
        a.re('P52', [9.00035, 0.05035, -239.99965], [0, 0, 0], [3, 2, 1]);
        a.re('P53', [22.00042, 0.05042, -241.49957999999998], [0, 0, 0], [1, 2, 3]);
        a.re('P54', [8.00049, 0.05049000000000001, -238.49951000000001], [0, 0, 0], [1, 2, 3]);
        a.re('P55', [5, 0.05, -243], [0, 0, 0], [3, 2, 1]);
        a.re('P56', [-4.99993, 0.050069999999999996, -236.99992999999998], [0, 0, 0], [3, 2, 1]);
        a.re('P57', [5.00014, 0.050140000000000004, -236.99986], [0, 0, 0], [3, 2, 1]);
        a.re('P58', [23.000210000000003, 0.05021, -242.99979], [0, 0, 0], [3, 2, 1]);
        a.re('P59', [4.00028, 0.05028, -241.49972000000002], [0, 0, 0], [1, 2, 3]);
        a.re('P60', [5.00035, 0.05035, -239.99965], [0, 0, 0], [3, 2, 1]);
        a.re('P61', [6.00042, 0.05042, -238.49957999999998], [0, 0, 0], [1, 2, 3]);
        a.re('P62', [23.00049, 0.05049000000000001, -236.99951000000001], [0, 0, 0], [3, 2, 1]);
        a.re('P63', [-5, 0.05, -243], [0, 0, 0], [3, 2, 1]);
        a.re('P64', [-5.999930000000001, 0.050069999999999996, -238.49992999999998], [0, 0, 0], [1, 2, 3]);
        a.re('P65', [-4.99986, 0.050140000000000004, -239.99986], [0, 0, 0], [3, 2, 1]);
        a.re('P66', [-7.999790000000001, 0.05021, -239.99979], [0, 0, 0], [1, 2, 6]);
        a.re('P67', [-9.99972, 0.05028, -238.49972000000002], [0, 0, 0], [1, 2, 3]);
        a.re('P68', [-18.99965, 0.05035, -239.99965], [0, 0, 0], [3, 2, 1]);
        a.re('P69', [-19.99958, 0.05042, -241.49957999999998], [0, 0, 0], [1, 2, 3]);
        a.re('P70', [9.00049, 0.05049000000000001, -242.99951000000001], [0, 0, 0], [3, 2, 1]);
        a.re('P71', [-19, 0.05, -237], [0, 0, 0], [3, 2, 1]);
        a.re('P72', [-3.99993, 0.050069999999999996, -239.99992999999998], [0, 0, 0], [1, 2, 6]);
        a.re('P73', [-22.999859999999998, 0.050140000000000004, -236.99986], [0, 0, 0], [3, 2, 1]);
        a.re('P74', [-23.999789999999997, 0.05021, -241.49979], [0, 0, 0], [1, 2, 3]);
        a.re('P75', [-22.999720000000003, 0.05028, -239.99972000000002], [0, 0, 0], [3, 2, 1]);
        a.re('P76', [-19.99965, 0.05035, -238.49965], [0, 0, 0], [1, 2, 3]);
        a.re('P77', [-17.99958, 0.05042, -239.99957999999998], [0, 0, 0], [1, 2, 6]);
        a.re('P78', [-22.99951, 0.05049000000000001, -242.99951000000001], [0, 0, 0], [3, 2, 1]);
        a.re('P79', [-9, 0.05, -237], [0, 0, 0], [3, 2, 1]);
        a.re('P80', [-9.99993, 0.050069999999999996, -241.49992999999998], [0, 0, 0], [1, 2, 3]);
        a.re('P81', [-8.99986, 0.050140000000000004, -239.99986], [0, 0, 0], [3, 2, 1]);
        a.re('P82', [-23.999789999999997, 0.05021, -238.49979], [0, 0, 0], [1, 2, 3]);
        a.re('P83', [-21.999720000000003, 0.05028, -239.99972000000002], [0, 0, 0], [1, 2, 6]);
        a.re('P84', [-8.99965, 0.05035, -242.99965], [0, 0, 0], [3, 2, 1]);
        a.re('P85', [-5.99958, 0.05042, -339.99958], [0, 0, 0], [1, 2, 6]);
        a.re('P86', [24.00049, 0.05049000000000001, -341.49951], [0, 0, 0], [1, 2, 3]);
        a.re('P87', [23, 0.05, -340], [0, 0, 0], [3, 2, 1]);
        a.re('P88', [9.00007, 0.050069999999999996, -339.99993], [0, 0, 0], [3, 2, 1]);
        a.re('P89', [10.00014, 0.050140000000000004, -341.49985999999996], [0, 0, 0], [1, 2, 3]);
        a.re('P90', [8.00021, 0.05021, -339.99979], [0, 0, 0], [1, 2, 6]);
        a.re('P91', [-8.99972, 0.05028, -342.99972], [0, 0, 0], [3, 2, 1]);
        a.re('P92', [-9.99965, 0.05035, -338.49965], [0, 0, 0], [1, 2, 3]);
        a.re('P93', [22.00042, 0.05042, -339.99958], [0, 0, 0], [1, 2, 6]);
        a.re('P94', [-18.99951, 0.05049000000000001, -339.99951], [0, 0, 0], [3, 2, 1]);
        a.re('P95', [-18, 0.05, -341.5], [0, 0, 0], [1, 2, 3]);
        a.re('P96', [-19.99993, 0.050069999999999996, -339.99993], [0, 0, 0], [1, 2, 6]);
        a.re('P97', [19.00014, 0.050140000000000004, -339.99985999999996], [0, 0, 0], [1, 2, 6]);
        a.re('P98', [4.00021, 0.05021, -339.99979], [0, 0, 0], [1, 2, 6]);
        a.re('P99', [5.00028, 0.05028, -342.99972], [0, 0, 0], [3, 2, 1]);
        a.re('P100', [5.00035, 0.05035, -336.99965], [0, 0, 0], [3, 2, 1]);
        a.re('P101', [5.00042, 0.05042, -339.99958], [0, 0, 0], [3, 2, 1]);
        a.re('P102', [-22.99951, 0.05049000000000001, -342.99951], [0, 0, 0], [3, 2, 1]);
        a.re('P103', [-24, 0.05, -340], [0, 0, 0], [1, 2, 6]);
        a.re('P104', [-4.99993, 0.050069999999999996, -339.99993], [0, 0, 0], [3, 2, 1]);
        a.re('P105', [-4.99986, 0.050140000000000004, -339.99985999999996], [0, 0, 0], [3, 2, 1]);
        a.re('P106', [-4.99979, 0.05021, -339.99979], [0, 0, 0], [3, 2, 1]);
        a.re('P107', [-3.99972, 0.05028, -341.49972], [0, 0, 0], [1, 2, 3]);
        a.re('P108', [-8.99965, 0.05035, -336.99965], [0, 0, 0], [3, 2, 1]);
        a.re('P109', [-8.99958, 0.05042, -339.99958], [0, 0, 0], [3, 2, 1]);
        a.re('P110', [-7.99951, 0.05049000000000001, -341.49951], [0, 0, 0], [1, 2, 3]);
        a.re('P111', [0, 7, -25], [0, 0.79, 0], [50, 2, 20]);
        a.re('P112', [0.00007000000000000001, 7.000069999999999, -124.99993], [0, 0.79, 0], [50, 2, 20]);
        a.re('P113', [0.00014000000000000001, 7.00014, -224.99986], [0, 0.79, 0], [50, 2, 20]);
        a.re('P114', [0.00021, 7.000209999999999, -324.99979], [0, 0.79, 0], [50, 2, 20]);
        a.re('P115', [-21, 0, -140], [0, 0, 0], [10, 2, 10]);
        a.re('P116', [7.000069999999999, 0.00007000000000000001, -39.99993], [0, 0, 0], [10, 2, 10]);
        a.re('P117', [0.00014000000000000001, 0.00014000000000000001, -7.99986], [0, 0, 0], [50, 2, 20]);
        a.re('P118', [-6.999790000000001, 7.000209999999999, -51.999790000000004], [0, 0.79, 0], [10, 2, 20]);
        a.re('P119', [7.00028, 7.00028, -51.999719999999996], [0, 0.79, 0], [10, 2, 20]);
        a.re('P120', [-20.999650000000003, 7.00035, -51.99965], [0, 0.79, 0], [10, 2, 20]);
        a.re('P121', [21.00042, 7.00042, -51.999579999999995], [0, 0.79, 0], [10, 2, 20]);
        a.re('P122', [0.00049, 0.00049, -89.99950999999999], [0, 0, 0], [50, 2, 60]);
        a.re('P123', [0, 0, -290], [0, 0, 0], [50, 2, 60]);
        a.re('P124', [21.00007, 7.000069999999999, -151.99993], [0, 0.79, 0], [10, 2, 20]);
        a.re('P125', [-20.999859999999998, 7.00014, -151.99986], [0, 0.79, 0], [10, 2, 20]);
        a.re('P126', [7.000209999999999, 7.000209999999999, -151.99979], [0, 0.79, 0], [10, 2, 20]);
        a.re('P127', [-6.99972, 7.00028, -151.99972], [0, 0.79, 0], [10, 2, 20]);
        a.re('P128', [7.00035, 0.00035000000000000005, -39.99965], [0, 0, 0], [10, 2, 10]);
        a.re('P129', [-6.99958, 0.00042, -39.99958], [0, 0, 0], [10, 2, 10]);
        a.re('P130', [-6.99951, 7.00049, -251.99951000000001], [0, 0.79, 0], [10, 2, 20]);
        a.re('P131', [7, 7, -252], [0, 0.79, 0], [10, 2, 20]);
        a.re('P132', [-20.99993, 7.000069999999999, -251.99992999999998], [0, 0.79, 0], [10, 2, 20]);
        a.re('P133', [21.000140000000002, 7.00014, -251.99986], [0, 0.79, 0], [10, 2, 20]);
        a.re('P134', [0.00021, 0.00021, -189.99979], [0, 0, 0], [50, 2, 60]);
        a.re('P135', [21.000279999999997, 7.00028, -351.99972], [0, 0.79, 0], [10, 2, 20]);
        a.re('P136', [-20.999650000000003, 7.00035, -351.99965], [0, 0.79, 0], [10, 2, 20]);
        a.re('P137', [7.00042, 7.00042, -351.99958], [0, 0.79, 0], [10, 2, 20]);
        a.re('P138', [-6.99951, 7.00049, -351.99951], [0, 0.79, 0], [10, 2, 20]);
        a.re('P139', [-7, 0, -340], [0, 0, 0], [10, 2, 10]);
        a.re('P140', [0.00007000000000000001, 0.00007000000000000001, -389.99993], [0, 0, 0], [50, 2, 60]);
        a.re('P141', [7.00014, 0.00014000000000000001, -39.99986], [0, 0, 0], [10, 2, 10]);
        a.re('P142', [7.000209999999999, 0.00021, -239.99979], [0, 0, 0], [10, 2, 10]);
        a.re('P143', [7.00028, 0.00028000000000000003, -39.99972], [0, 0, 0], [10, 2, 10]);
        a.re('E0', [0.00035000000000000005, 2.00035, -419.99965], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
