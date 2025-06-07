import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  height: 77px;

  border-collapse: collapse;
  margin-top: 20px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

export const TrHead = styled.tr`
  height: 40px;

  &:last-child {
    width: 80px;
  }
`;

export const Th = styled.th`
  font-family: "Poppins";
  text-align: left;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;

  color: rgba(204, 98, 55, 0.5);

  padding: 12px 16px;
`;

export const TrBody = styled.tr`
  border-bottom: 1px solid #eee;
  height: 37px;
`;

export const Td = styled.td`
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: rgba(101, 117, 147, 1);

  padding: 12px 16px;

  span {
    display: inline-block;

    width: 9px;
    height: 9px;

    margin-right: 2px;

    border-radius: 50%;

    background-color: rgba(77, 239, 0, 1);
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
`;
