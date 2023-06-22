import React, { useEffect } from 'react';

interface ChartLoaderProps {
  data: any[];
  chartId: string;
  columnXname: string;
  columnYname: string;
  chartType?: string;
}

const ChartLoader: React.FC<ChartLoaderProps> = ({
  data,
  chartId,
  columnXname,
  columnYname,
  chartType,
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

      if (chartType === 'pie') {
        chart.coordinate('theta', {
          radius: 0.75,
        });
      }

      chart.tooltip({
        showMarkers: false,
      });

      // Use adjust() instead of position() for bar chart
      chart
        .interval()
        .position(`${columnXname}*${columnYname}`)
        .adjust('stack')
        .color(columnXname);

      chart.render();
    });
  }, [data, chartId, columnYname, chartType, columnXname]);

  return <div id={chartId} style={{ height: '500px' }} />;
};

export default ChartLoader;
