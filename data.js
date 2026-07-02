let students = [
  {
    name: "Richard",
    indexNumber: 1234567890,
    password: "123",
    program: "Accounting",
    academicYear: "24/25",
    level: 200,
    fees: 0,
    department: "Mathematics",
  },
  {
    name: "Solomon",
    indexNumber: 2234567890,
    password: "123",
    program: "Nursing",
    academicYear: "24/25",
    level: 200,
    fees: 0,
    department: "Mathematics",
  },
  {
    name: "Richmond",
    indexNumber: 3234567890,
    password: "123",
    program: "Nursing",
    academicYear: "24/25",
    level: 200,
    fees: 8,
    department: "I.T",
  },
  {
    name: "Comfort",
    indexNumber: 1234567891,
    password: "123",
    program: "Nursing",
    academicYear: "24/25",
    level: 100,
    fees: 0,
    department: "I.T",
  },
];

let clearanceRequests = [
  {
    indexNumber: 1234567890,
    dateOfRequest: "2022-06-19",
    department: "Mathematics",

    departments: [
      {
        officer: "Library",
        status: "Approved",
        comment: "",
      },
      {
        officer: "Accounts",
        status: "Approved",
        comment: "",
      },
      {
        officer: "Department",
        status: "Rejected",
        comment: "Owing dues",
      },
    ],
  },
  {
    indexNumber: 2234567890,
    dateOfRequest: "2022-06-19",
    department: "Mathematics",

    departments: [
      {
        officer: "Library",
        status: "Pending",
        comment: "",
      },
      {
        officer: "Accounts",
        status: "Pending",
        comment: "",
      },
      {
        officer: "Department",
        status: "Rejected",
        comment: "Owing dues",
      },
    ],
  },
  {
    indexNumber: 1234567891,
    dateOfRequest: "2022-06-19",
    department: "I.T",
    departments: [
      {
        officer: "Library",
        status: "Approved",
        comment: "",
      },
      {
        officer: "Accounts",
        status: "Pending",
        comment: "",
      },
      {
        officer: "Department",
        status: "Rejected",
        comment: "Owing dues",
      },
    ],
  },
];

let officers = [
  {
    name: "Library",
    email: "1@2.com",
    password: "123",
  },
  {
    name: "Accounts",
    email: "1@2.com",
    password: "123",
  },
  {
    name: "Department",
    department: "Mathematics",
    email: "1@2.com",
    password: "123",
  },
  {
    name: "Department",
    department: "I.T",
    email: "1@2.com",
    password: "123",
  },
];

export { clearanceRequests, students, officers };
