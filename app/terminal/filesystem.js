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

// Example of checking if a directory exists
const isHomeDefined = Terminal.DirOp.hasDirectory(customFileSystem, '/home');
