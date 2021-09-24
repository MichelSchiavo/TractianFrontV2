import { AssetsProps } from "./types";

export const chartOptions = (data: AssetsProps | undefined) => {
  return  {
    chart: {
      type: 'column',
      ignoreHiddenSeries:true,
      width: 300,
      backgroundColor: 'transparent',
    },
    title: {
      text: 'Informação da unidade'
    },
    xAxis: {
      categories: [
        'Saúde'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'https://tractian.com'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.42,
        borderWidth: 0,
        color: data?.status === 'inAlert' ? 'red' : data?.status === 'inOperation' ? 'green' : 'gray'
      },
    },
    series: 
    [{
        name: data?.name,
        data: [data?.healthscore]
      }]
  };

}