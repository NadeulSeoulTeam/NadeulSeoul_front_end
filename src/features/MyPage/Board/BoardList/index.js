/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// actions
import { loadBoardList, postIdToListItem } from '../../MyPageSlice';

// components

// title, id, date(작성 시간) 3개만 프로필에 표시하면 된다.
const columns = [
  { id: 'questionSeq', label: 'No', minWidth: 100 },
  { id: 'questionTitle', label: 'Title', minWidth: 170 },
  {
    id: 'questionDate',
    label: 'Date',
    minWidth: 170,
    align: 'left',
  },
];

function BoardList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useDispatch();
  // 서버 연결시 rows 대신에 mainPosts에 연결하면 됨
  const { userInfo, mainPosts } = useSelector((state) => state.mypage);
  const navigate = useNavigate();

  console.log(mainPosts);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // props로 안하고 dispatch로 postId보내자

  const onClick = useCallback(
    (id) => () => {
      console.log(id);
      dispatch(postIdToListItem(id));
      navigate(`/questions/${id}`, { state: { postId: id } });
    },
    []
  );

  const onClickCreateInqury = useCallback(() => {
    navigate(`/questions/new`);
  }, []);

  useEffect(() => {
    dispatch(loadBoardList(userInfo[0].id));
    console.log(userInfo[0].id);
  }, []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <h1>문의 게시판</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Stack spacing={2} direction="row">
          <Button onClick={onClickCreateInqury} variant="contained">
            문의 작성
          </Button>
        </Stack>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <h2>{column.label}</h2>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {mainPosts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.questionSeq}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          onClick={onClick(row.questionSeq)}
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={mainPosts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default BoardList;
