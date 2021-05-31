
function getQueryParameter(project: string, searchString?: string, xml?: boolean) {
  return {
    project,
    ...(searchString !== undefined && { searchString }),
    ...(xml !== undefined && {xml})
  };
}

console.log(getQueryParameter('Yolo'));

console.log(getQueryParameter('Project', 'SearchString'));
console.log(getQueryParameter('Project', 'SearchString', false));
