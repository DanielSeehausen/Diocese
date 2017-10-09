const game = {
  sends: {
    ws1: [
      {
        "action":"move",
        "blockCoords": [[0, 0], [0, 1]],
        "pieceName":"apartments",
      },
      {"debug":"finished test for client 1"}
    ],
    ws2: [
      {
        "action":"move",
        "blockCoords": [[1, 0], [1, 1]],
        "pieceName":"apartments",
      },
      {"debug":"finished test for client 1"}
    ],
  },
  receives: {
    ws1: [
      {"msg":"1 is ready","action":"ready"},
      {"msg":"2 is ready","action":"ready"},
      {
        "0":[1,1,null,null,null,null,null,null,null,null],
        "1":[null,null,null,null,null,null,null,null,null,null],
        "2":[null,null,null,null,null,null,null,null,null,null],
        "3":[null,null,null,null,null,null,null,null,null,null],
        "4":[null,null,null,null,null,null,null,null,null,null],
        "5":[null,null,null,null,null,null,null,null,null,null],
        "6":[null,null,null,null,null,null,null,null,null,null],
        "7":[null,null,null,null,null,null,null,null,null,null],
        "8":[null,null,null,null,null,null,null,null,null, null],
        "action":"move"
      },
      {
        "0":[1,1,null,null,null,null,null,null,null,null],
        "1":[2,2,null,null,null,null,null,null,null,null],
        "2":[null,null,null,null,null,null,null,null,null,null],
        "3":[null,null,null,null,null,null,null,null,null,null],
        "4":[null,null,null,null,null,null,null,null,null,null],
        "5":[null,null,null,null,null,null,null,null,null,null],
        "6":[null,null,null,null,null,null,null,null,null,null],
        "7":[null,null,null,null,null,null,null,null,null,null],
        "8":[null,null,null,null,null,null,null,null,null,null],
        "action":"move"
      },
      {"debug":"noAction","action":"noAction"}, // marker of game over p1
      {"debug":"noAction","action":"noAction"} // marker of game over p2
    ],
    ws2: [
      {"msg":"1 is ready","action":"ready"},
      {"msg":"2 is ready","action":"ready"},
      {
        "0":[1,1,null,null,null,null,null,null,null,null],
        "1":[null,null,null,null,null,null,null,null,null,null],
        "2":[null,null,null,null,null,null,null,null,null,null],
        "3":[null,null,null,null,null,null,null,null,null,null],
        "4":[null,null,null,null,null,null,null,null,null,null],
        "5":[null,null,null,null,null,null,null,null,null,null],
        "6":[null,null,null,null,null,null,null,null,null,null],
        "7":[null,null,null,null,null,null,null,null,null,null],
        "8":[null,null,null,null,null,null,null,null,null, null],
        "action":"move"
      },
      {
        "0":[1,1,null,null,null,null,null,null,null,null],
        "1":[2,2,null,null,null,null,null,null,null,null],
        "2":[null,null,null,null,null,null,null,null,null,null],
        "3":[null,null,null,null,null,null,null,null,null,null],
        "4":[null,null,null,null,null,null,null,null,null,null],
        "5":[null,null,null,null,null,null,null,null,null,null],
        "6":[null,null,null,null,null,null,null,null,null,null],
        "7":[null,null,null,null,null,null,null,null,null,null],
        "8":[null,null,null,null,null,null,null,null,null,null],
        "action":"move"
      },
      {"debug":"noAction","action":"noAction"}, // marker of game over p1
      {"debug":"noAction","action":"noAction"} // marker of game over p2
    ],
  }
}
