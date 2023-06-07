import React, { useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { data, Person } from './makeData';

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        // mantineTableHeadCellProps: { sx: { color: 'green' } }, //custom props
        Header: <i style={{ color: 'red' }}>Age22</i>,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        Header: <i style={{ color: 'red' }}>Age</i>, //optional custom markup
      },
      {
        accessorKey: 'email',
        header: 'Email Address',
        size: 300,
        // mantineTableHeadCellProps: { sx: { color: 'green' } }, //custom props
      },
    ],
    [],
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableColumnResizing
      layoutMode="grid"
      //Disables the default flex-grow behavior of the table cells
      mantineTableHeadCellProps={{
        sx: {
          flex: '0 0 auto',
        },
      }}
      mantineTableBodyCellProps={{
        sx: {
          flex: '0 0 auto',
        },
      }}
      //
      enableRowSelection //enable some features
      // enableColumnOrdering
      enableGlobalFilter={false} //turn off a feature
      enableColumnActions={false}
    />
  );
};

export default Example;