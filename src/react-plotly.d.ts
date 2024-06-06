declare module 'react-plotly.js' {
    import * as React from 'react';
    import Plotly from 'plotly.js';
  
    export interface PlotParams {
      data: Plotly.Data[];
      layout?: Partial<Plotly.Layout>;
      config?: Partial<Plotly.Config>;
      frames?: Partial<Plotly.Frame>[];
      revision?: number;
      onInitialized?: (figure: PlotParams, graphDiv: HTMLElement) => void;
      onUpdate?: (figure: PlotParams, graphDiv: HTMLElement) => void;
      onPurge?: (figure: PlotParams, graphDiv: HTMLElement) => void;
      onError?: (err: any) => void;
      useResizeHandler?: boolean;
      divId?: string;
      style?: React.CSSProperties;
      className?: string;
    }
  
    export default class Plot extends React.Component<PlotParams> {}
  }
  