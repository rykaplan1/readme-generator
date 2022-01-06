// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license ? `![License](https://img.shields.io/badge/License-${license}-brightgreen)` : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `
## License

This application is published under a ${license} license.
` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);

  let markdown = `# ${data.title} ${badge}

## Description

${data.description}

`
  const profileLine = data.username ? `My profile: https://github.com/${data.username}` : 'No profile provided';

  const emailLine = data.email ? `Please send any questions to ${data.email}` : 'No email address provided';

  let contents = '## Table of Contents\n';
  let sections = '';
  //The list of keys below encompasses all user inputs that should not be on the table of contents.
  const doNotUse = ['title', 'description', 'username', 'email', 'filename'];
  for (const key of Object.keys(data)) {
    if (!doNotUse.includes(key) && data[key]) {
      contents += `\n- [${key[0].toUpperCase() + key.slice(1)}](#${key})`;
      if (key === 'license') {
        sections += `
## License

This application is published under a ${data.license} license.
`;
      } else {
        sections += `
## ${key[0].toUpperCase() + key.slice(1)}

${data[key]}
`;
      }

    }
    if (!data[key] && key !== 'license') {
      data[key] = 'N/A';
    }
  }
  contents += '\n- [Questions](#questions)\n';
  sections += `
## Questions

${profileLine}

${emailLine}`

  markdown += contents;
  markdown += sections;

  return markdown;
}

module.exports = generateMarkdown;