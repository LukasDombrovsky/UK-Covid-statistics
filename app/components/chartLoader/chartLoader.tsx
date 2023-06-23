import React, { useEffect } from 'react';

interface ChartLoaderProps {
  data: any[];
  chartId: string;
  columnXname: string;
  columnYname: string;
  chartCordinate?: string;
}

const ChartLoader: React.FC<ChartLoaderProps> = ({
  data,
  chartId,
  columnXname,
  columnYname,
  chartCordinate,
}) => {
  useEffect(() => {
    import('@antv/g2').then(({ Chart }) => {
      const chart = new Chart({
        container: chartId,
        autoFit: true,
        height: 500,
      });

      chart.data(data);

      chart.scale(columnYname, {
        nice: true,
      });

      if (chartCordinate === 'theta') {
        chart.coordinate('theta', {
          radius: 0.75,
        });
      }

      chart
        .interval()
        .position(`${columnXname}*${columnYname}`)
        .color(columnXname);

      chart.render();
    });
  }, [data, chartId, columnYname, chartCordinate, columnXname]);

  return <div id={chartId} />;
};

export default ChartLoader;
