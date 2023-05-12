import { DownloadOutlined } from "@ant-design/icons";
import { Button, Divider, Radio, Space } from "antd";
import { useState } from "react";
const App2 = () => {
  const [size, setSize] = useState("large"); // default is 'middle'

  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <Space direction="vertical">
        <Space wrap>
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
        </Space>
        <Button type="link" size={size}>
          Link
        </Button>
        <Space wrap>
          <Button type="primary" icon={<DownloadOutlined />} size={size} />
          <Button
            type="primary"
            shape="circle"
            icon={<DownloadOutlined />}
            size={size}
          />
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size={size}
          />
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size={size}
          >
            Download
          </Button>
          <Button type="primary" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
        </Space>
      </Space>
    </>
  );
};
export default App2;
