/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
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

// title, id, date(작성 시간) 3개만 프로필에 표시하면 된다.
const columns = [
  { id: 'id', label: 'No', minWidth: 100 },
  { id: 'title', label: 'Title', minWidth: 170 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'left',
  },
];

// 서버 연결시 삭제 필요
function createData(id, title, date) {
  return { id, title, date };
}
// 들어오는 날짜 데이터를 처리
const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

// 서버 연결시 삭제 필요
const rows = [
  createData('1', '안녕하세요 - 1', nowTime),
  createData('2', '안녕하세요 - 2', nowTime),
  createData('3', '안녕하세요 - 3', nowTime),
  createData('4', '안녕하세요 - 4', nowTime),
  createData('5', '안녕하세요 - 5', nowTime),
  createData('6', '안녕하세요 - 6', nowTime),
  createData('7', '안녕하세요 - 7', nowTime),
  createData('8', '안녕하세요 - 8', nowTime),
  createData('9', '안녕하세요 - 9', nowTime),
  createData('10', '안녕하세요 - 10', nowTime),
];

function BoardList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useDispatch();
  // 서버 연결시 rows 대신에 mainPosts에 연결하면 됨
  // const { mainPosts } = useSelector((state) => state.mypage);
  const { userInfo } = useSelector((state) => state.mypage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();
  // const params = useParams();
  // const userId = params.id;

  // props로 안하고 dispatch로 postId보내자

  const onClick = useCallback(
    (id) => () => {
      console.log('here');
      console.log(id);
      dispatch(postIdToListItem(id));
      navigate(`/questions/${id}`);
    },
    []
  );

  const onClickCreateInqury = useCallback(() => {
    console.log('문의작성');
    navigate(`/questions/new`);
  }, []);

  useEffect(() => {
    dispatch(loadBoardList(userInfo.id));
  }, [userInfo.id]);

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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          onClick={onClick(row.id)}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default BoardList;
