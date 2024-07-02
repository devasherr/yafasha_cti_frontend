import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data, aspect, title }) => {
  const result = data
    ? [
        {
          name: "",
          Total: 0,
        },
        {
          name: "LOC",
          Total: (data.ner["B-LOCATION"] || 0) + (data.ner["I-LOCATION"] || 0),
        },
        {
          name: "THR",
          Total: (data.ner["B-THREAT"] || 0) + (data.ner["I-THREAT"] || 0),
        },
        {
          name: "THR-A",
          Total:
            (data.ner["B-THREAT-ACTOR"] || 0) +
            (data.ner["I-THREAT-ACTOR"] || 0),
        },
        {
          name: "ORG",
          Total:
            (data.ner["B-ORGANIZATION"] || 0) +
            (data.ner["I-ORGANIZATION"] || 0),
        },
        {
          name: "TECH",
          Total:
            (data.ner["B-TECHNOLOGY"] || 0) + (data.ner["I-TECHNOLOGY"] || 0),
        },
        {
          name: "SEC-T",
          Total:
            (data.ner["B-SECURITY-TEAM"] || 0) +
            (data.ner["I-SECURITY-TEAM"] || 0),
        },
        {
          name: "VUL",
          Total:
            (data.ner["B-VULNERABILITY"] || 0) +
            (data.ner["I-VULNERABILITY"] || 0),
        },
        {
          name: "PER",
          Total: (data.ner["B-PERSON"] || 0) + (data.ner["I-PERSON"] || 0),
        },
        {
          name: "PROD",
          Total: (data.ner["B-PRODUCT"] || 0) + (data.ner["I-PRODUCT"] || 0),
        },
        {
          name: "DATE",
          Total: (data.ner["B-DATE"] || 0) + (data.ner["I-DATE"] || 0),
        },
        {
          name: "",
          Total: 0,
        },
      ]
    : [
        {
          name: "",
          Total: 0,
        },
        {
          name: "LOC",
          Total: 0,
        },
        {
          name: "THR",
          Total: 0,
        },
        {
          name: "THR-A",
          Total: 0,
        },
        {
          name: "ORG",
          Total: 0,
        },
        {
          name: "TECH",
          Total: 0,
        },
        {
          name: "SEC-T",
          Total: 0,
        },
        {
          name: "VUL",
          Total: 0,
        },
        {
          name: "PER",
          Total: 0,
        },
        {
          name: "PROD",
          Total: 0,
        },
        {
          name: "DATE",
          Total: 0,
        },
        {
          name: "",
          Total: 0,
        },
      ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={result}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
