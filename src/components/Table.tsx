// TableView.tsx
import * as React from "react";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

type TableViewProps = {
  data: {
    name: string;
    minDiameter: number;
    maxDiameter: number;
    averageDiameter: number;
  }[];
};

const TableView: React.FC<TableViewProps> = ({ data }) => {
  const tableData = {
    nodes: data.map((item) => ({
      id: item.name,
      name: item.name,
      minDiameter: item.minDiameter,
      maxDiameter: item.maxDiameter,
      averageDiameter: item.averageDiameter,
    })),
  };

  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
        background-color: #4488F7;
        color: white;
      `,
    },
  ]);

  return (
    <Table data={tableData} theme={theme}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>NEO Name</HeaderCell>
              <HeaderCell>Min Diameter (km)</HeaderCell>
              <HeaderCell>Max Diameter (km)</HeaderCell>
              <HeaderCell>Average Diameter (km)</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>{item.name}</Cell>
                <Cell>{item.minDiameter}</Cell>
                <Cell>{item.maxDiameter}</Cell>
                <Cell>{item.averageDiameter}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};

export default TableView;
