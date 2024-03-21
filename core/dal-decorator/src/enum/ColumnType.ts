// Data Types https://dev.mysql.com/doc/refman/8.0/en/data-types.html
export enum ColumnType {
  // Numeric
  BIT = 'BIT',
  TINYINT = 'TINYINT',
  BOOL = 'BOOL',
  SMALLINT = 'SMALLINT',
  MEDIUMINT = 'MEDIUMINT',
  INT = 'INT',
  BIGINT = 'BIGINT',
  DECIMAL = 'DECIMAL',
  FLOAT = 'FLOAT',
  DOUBLE = 'DOUBLE',
  // Date
  DATE = 'DATE',
  DATETIME = 'DATETIME',
  TIMESTAMP = 'TIMESTAMP',
  TIME = 'TIME',
  YEAR = 'YEAR',
  // String
  CHAR = 'CHAR',
  VARCHAR = 'VARCHAR',
  BINARY = 'BINARY',
  VARBINARY = 'VARBINARY',
  TINYBLOB = 'TINYBLOB',
  TINYTEXT = 'TINYTEXT',
  BLOB = 'BLOB',
  TEXT = 'TEXT',
  MEDIUMBLOB = 'MEDIUMBLOB',
  MEDIUMTEXT = 'MEDIUMTEXT',
  LONGBLOB = 'LONGBLOB',
  LONGTEXT = 'LONGTEXT',
  ENUM = 'ENUM',
  SET = 'SET',
  // JSON
  JSON = 'JSON',
  // Spatial
  GEOMETRY = 'GEOMETRY',
  POINT = 'POINT',
  LINESTRING = 'LINESTRING',
  POLYGON = 'POLYGON',
  MULTIPOINT = 'MULTIPOINT',
  MULTILINESTRING = 'MULTILINESTRING',
  MULTIPOLYGON = 'MULTIPOLYGON',
  GEOMETRYCOLLECTION = 'GEOMETRYCOLLECTION',
}