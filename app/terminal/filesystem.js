const customFileSystem = Terminal.FileSystem.create({
  '/home': {},
  '/home/Liam': {},
  '/home/Liam/about.txt': { content: 'About Liam', canModify: true },
  '/home/Liam/personal.txt': { content: 'Personal info about Liam', canModify: true },
  '/home/Liam/experience.txt': { content: 'Experience of Liam', canModify: true },
  '/home/Lawrence': {},
  '/home/Ted': {},
  '/home/Jenny': {},
  '/etc': {},
  '/var': {},
  '/vghs': {},
});

// Checking if all important directories exist
const directoriesToCheck = [
  '/home',
  '/home/Liam',
  '/home/Lawrence',
  '/home/Ted',
  '/home/Jenny',
  '/etc',
  '/var',
  '/vghs'
];

const checkResults = {};

directoriesToCheck.forEach(dir => {
  checkResults[dir] = Terminal.DirOp.hasDirectory(customFileSystem, dir);
});

// Output check results (optional, for debugging)
console.log(checkResults);
