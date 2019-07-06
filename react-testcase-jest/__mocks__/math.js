module.exports = {
  add: jest.fn().mockReturnValue("a"),
  subtract: jest.fn().mockReturnValue("s"),
  multiply: jest.fn().mockReturnValue("m"),
  divide: jest.fn().mockReturnValue("d")
};
