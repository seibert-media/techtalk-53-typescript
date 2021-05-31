export type DataPointValueType = 'int_16' | 'int_32' | 'bool' | 'int_64'; // add tp switch case!!!!

const tableMap: {[P in DataPointValueType]: string} = {
  int_16: 'int_16_table',
  int_32: 'int_32_table',
  bool: 'bool_table',
  int_64: 'int_64_table'  
}

function getTable(type: DataPointValueType): string {
  return tableMap[type];
}

console.log(getTable('int_16'));
console.log(getTable('bool'));