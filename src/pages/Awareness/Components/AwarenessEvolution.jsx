import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        usePointStyle: true,
        pointStyle: 'line',
        font: { size: 13 },
      },
    },
    title: { display: false },
  },
  elements: {
    line: { borderWidth: 2 },
    point: { radius: 3 },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { display: false },
      grid: { drawTicks: false },
    },
  },
};

const chartData = {
  labels: [
    'May 23 - Jun 23',
    'Jun 23 - Jul 23',
    'Jul 23 - Aug 23',
    'Aug 23 - Sep 23',
    'Sep 23 - Oct 23',
    'Oct 23 - Nov 23',
  ],
  datasets: [
    {
      label: 'Burger King',
      data: [15, 32, 27, 28, 31, 30, 28],
      borderColor: '#1a7f37',
      backgroundColor: '#1a7f37',
      tension: 0.4,
    },
    {
      label: 'McDonalds',
      data: [18, 18, 21, 22, 19, 32, 25],
      borderColor: '#e74c3c',
      backgroundColor: '#e74c3c',
      tension: 0.4,
    },
  ],
};

const deltaMonths = ['May', 'June', 'July', 'Aug', 'Sept', 'Oct'];
const deltaData = [18, 18, 18, 18, 18, 18];

const DeltaTable = () => (
  <div className="card delta-card mb-2">
    <div className="delta-header d-flex align-items-center px-3 pt-3 pb-2">
      <div className="me-4" style={{ color: '#1a7f37', fontWeight: 600 }}>
        ▲ Delta Burger King
      </div>
      <div style={{ color: '#e74c3c', fontWeight: 600 }}>
        ▼ Delta McDonalds
      </div>
    </div>
    <div className="delta-table px-3 pb-3">
      <div className="d-flex delta-months">
        {deltaMonths.map((m, i) => (
          <div key={m} className="delta-month flex-fill text-center" style={{ fontWeight: 500 }}>
            {m}
          </div>
        ))}
      </div>
      <div className="d-flex delta-values">
        {deltaData.map((v, i) => (
          <div key={i} className="delta-value flex-fill text-center">
            {v}
          </div>
        ))}
      </div>
      <div className="d-flex delta-values">
        {deltaData.map((v, i) => (
          <div key={i} className="delta-value flex-fill text-center">
            {v}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Panel = ({ title }) => (
  <div className="evolution-panel">
    <div className="panel-title text-center mb-2" style={{ fontWeight: 600, fontSize: '1.1rem', borderBottom: '2px solid #eee', paddingBottom: 4 }}>
      {title}
    </div>
    <div className="card mb-2" style={{ borderRadius: 16, background: '#f8f8f8' }}>
      <div className="p-3">
        <div className="mb-2" style={{ fontWeight: 500 }}>Spontaneous Awareness (TOM)</div>
        <div className="card" style={{ borderRadius: 12, background: '#fff' }}>
          <div className="p-3">
            <div className="mb-2" style={{ fontWeight: 500 }}>Evolution</div>
            <Line data={chartData} options={chartOptions} height={180} />
          </div>
        </div>
        <DeltaTable />
      </div>
    </div>
    <div className="d-flex justify-content-between align-items-center px-2 pb-2 pt-1 legend-row">
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 16, height: 16, background: '#1a7f37', display: 'inline-block', borderRadius: 3, marginRight: 6 }}></span>
        Burger King
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 16, height: 16, background: '#e74c3c', display: 'inline-block', borderRadius: 3, marginRight: 6 }}></span>
        McDonalds
      </div>
    </div>
  </div>
);

const AwarenessEvolution = () => (
  <div className="row g-3">
    <div className="col-12 col-lg-6">
      <Panel title="Overall" />
    </div>
    <div className="col-12 col-lg-6">
      <Panel title="By Segments" />
    </div>
  </div>
);

export default AwarenessEvolution; 