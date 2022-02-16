/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// actions
import { loadBoardList, postIdToListItem } from '../../MyPageSlice';

// custom styles
import {
  Container,
  BoardHeader,
  GreenBtn,
  ColumnTitle,
  Row,
  Pagination,
} from './styles';

// cookie
// import { getUserInfo } from '../../../../common/api/JWT-Token';

// title, id, date(작성 시간) 3개만 프로필에 표시하면 된다.
const columns = [
  { id: 'questionSeq', label: '번호', minWidth: 100 },
  { id: 'questionTitle', label: '제목', minWidth: 170 },
  {
    id: 'questionDate',
    label: '작성일자',
    minWidth: 170,
    align: 'left',
  },
];

function BoardList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useDispatch();
  // 서버 연결시 rows 대신에 mainPosts에 연결하면 됨
  const { mainPosts } = useSelector((state) => state.mypage);
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

  const onClickCreateInquiry = useCallback(() => {
    navigate(`/questions/new`);
  }, []);

  useEffect(() => {
    dispatch(loadBoardList(1))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <BoardHeader>문의 게시판</BoardHeader>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <GreenBtn onClick={onClickCreateInquiry}>문의 작성</GreenBtn>
      </div>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <ColumnTitle
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </ColumnTitle>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {mainPosts
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            ?.map((row) => {
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
                      <Row
                        onClick={onClick(row.questionSeq)}
                        key={column.id}
                        align={column.align}
                      >
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </Row>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <Pagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={mainPosts?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
}

export default BoardList;
