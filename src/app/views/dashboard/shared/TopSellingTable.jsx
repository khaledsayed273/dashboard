import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',

  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));



const TopSellingTable = ({ title, tableHead, list, edit, show }) => {
  const navigation = useNavigate();
  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>{title}</Title>

      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>

              {tableHead.map((ele, index) => (
                <TableCell key={index} sx={{ px: 3 }} colSpan={2} align="center">
                  {ele}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {list.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={2} align="center" sx={{ px: 3, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center" margin={'auto'}>
                    <Avatar src={product.imgUrl} align="center" />
                  </Box>
                </TableCell>
                <TableCell colSpan={2} align="center" sx={{ px: 3, textTransform: 'capitalize' }}>

                  {product.name}
                </TableCell>

                <TableCell align="center" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                  ${product.price > 999 ? (product.price / 1000).toFixed(1) + 'k' : product.price}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="center" colSpan={2}>
                  {product.available ? (
                    product.available < 20 ? (
                      <Typography variant='p'>available</Typography>
                    ) : (
                      <Typography variant='p'>in stock</Typography>
                    )
                  ) : (
                    <Typography variant='p'>out of stock</Typography>
                  )}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={2} align="center">
                  <IconButton onClick={() => navigation(edit)}>
                    <Icon color="primary">edit</Icon>
                  </IconButton>
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
                  <IconButton onClick={() => navigation(show)}>
                    <Icon color="info">visibility</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};



export default TopSellingTable;
