
$(function () {
    var ctx_0 = document.getElementById("AAPL").getContext('2d');
    var data_0 = [0.15,0.08,0.14,0.1,0.52,0.42,0.52,0.4,0.23,0.25,0.17,0.42,0.34,0.27,0.54,2.53,6.34,6.5,11.9,16.35,25.71,23.25,44.63,64.33,141.58,147.81];

    var myChart_0 = new Chart(ctx_0,{
        type: 'line',
        data: {
            labels: ['Dec 24, 1980','Sep 07, 1982','May 16, 1984','Jan 28, 1986','Oct 05, 1987','Jun 06, 1989','Feb 06, 1991','Oct 07, 1992','Jun 09, 1994','Feb 09, 1996','Oct 21, 1997','Jul 07, 1999','Mar 16, 2001','Dec 03, 2002','Aug 18, 2004','May 01, 2006','Jan 14, 2008','Sep 25, 2009','Jun 09, 2011','Feb 20, 2013','Oct 22, 2014','Jun 27, 2016','Mar 01, 2018','Nov 04, 2019','Jul 08, 2021','Mar 13, 2023'],
            datasets: [{
                label: 'price',
                data: data_0,
                borderColor: [
                    "red",
                ],
                borderWidth: 1
            }]
        },
        options: {
    responsive: false,
    legend: {display: false}
    
  }
});
    var ctx_1 = document.getElementById("AMZN").getContext('2d');
    var data_1 = [0.09,0.37,2.85,2.36,0.71,0.84,2.1,1.78,2.18,1.54,4.32,3.53,4.57,8.03,10.33,11.33,18.5,15.84,34.0,38.62,62.99,83.53,102.05,164.12,152.73,89.97];

    var myChart_1 = new Chart(ctx_1,{
        type: 'line',
        data: {
            labels: ['May 19, 1997','Jun 01, 1998','Jun 09, 1999','Jun 16, 2000','Jun 28, 2001','Jul 17, 2002','Jul 29, 2003','Aug 10, 2004','Aug 19, 2005','Aug 31, 2006','Sep 14, 2007','Sep 25, 2008','Oct 07, 2009','Oct 19, 2010','Oct 28, 2011','Nov 12, 2012','Nov 22, 2013','Dec 05, 2014','Dec 17, 2015','Dec 29, 2016','Jan 11, 2018','Jan 25, 2019','Feb 06, 2020','Feb 18, 2021','Mar 01, 2022','Mar 13, 2023'],
            datasets: [{
                label: 'price',
                data: data_1,
                borderColor: [
                    "red",
                ],
                borderWidth: 1
            }]
        },
        options: {
    responsive: false,
    legend: {display: false}
    
  }
}); });
    