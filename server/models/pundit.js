'use strict';
module.exports = (sequelize, DataTypes) => {
  var pundit = sequelize.define('pundit', {
    YR_RESIVE: {
      type: DataTypes.STRING
    },
    NUMGEN: {
      type: DataTypes.DOUBLE
    },
    NUMCURR: {
      type: DataTypes.DOUBLE
    },
    NUMREAL: {
      type: DataTypes.DOUBLE
    },
    NUMDIPLOMA: {
      type: DataTypes.DOUBLE
    },
    NUMGROUP: {
      type: DataTypes.DOUBLE
    },
    NUMALL: {
      type: DataTypes.STRING
    },
    READBYBOSS: {
      type: DataTypes.STRING
    },
    NUMROW: {
      type: DataTypes.STRING
    },
    STUDENT_ID: {
      type: DataTypes.STRING
    },
    CREDIT: {
      type: DataTypes.STRING
    },
    MAJOR: {
      type: DataTypes.STRING
    },
    STATUS: {
      type: DataTypes.STRING
    },
    STATUS_RENAME: {
      type: DataTypes.STRING
    },
    PNAME: {
      type: DataTypes.STRING
    },
    NATION_ID: {
      type: DataTypes.STRING
    },
    FNAME: {
      type: DataTypes.STRING
    },
    LNAME: {
      type: DataTypes.STRING
    },
    SELECT_NAME: {
      type: DataTypes.STRING
    },
    FULLNAME: {
      type: DataTypes.STRING
    },
    SN: {
      type: DataTypes.STRING
    },
    SN_YEAR: {
      type: DataTypes.STRING
    },
    GPA: {
      type: DataTypes.STRING
    },
    STATUSREAL: {
      type: DataTypes.STRING
    },
    STATUSREGIS_ID: {
      type: DataTypes.STRING
    },
    NUMROOM: {
      type: DataTypes.DOUBLE
    },
    B_DETAIL: {
      type: DataTypes.STRING
    },
    GROUP_READING: {
      type: DataTypes.DOUBLE
    },
    TMNDATE: {
      type: DataTypes.STRING
    },
    CRUI: {
      type: DataTypes.STRING
    },
    TEA_DETAIL: {
      type: DataTypes.STRING
    },
    BUNDIT_TYPE_ID: {
      type: DataTypes.DOUBLE
    },
    STD_TYPE: {
      type: DataTypes.DOUBLE
    },
    EMPLOYEE_ID: {
      type: DataTypes.STRING
    },
    NOTES: {
      type: DataTypes.STRING
    },
    OLD_STATUS: {
      type: DataTypes.STRING
    },
    OLDMJCODE: {
      type: DataTypes.STRING
    },
    D_FINISH: {
      type: DataTypes.DOUBLE
    },
    M_FINISH: {
      type: DataTypes.STRING
    },
    Y_FINISH: {
      type: DataTypes.DOUBLE
    },
    MASAGEBOX: {
      type: DataTypes.STRING
    },
    PEOPLE_END: {
      type: DataTypes.STRING
    },
    BUNDITSPECIAL: {
      type: DataTypes.DOUBLE
    },
    ASSOCIATED: {
      type: DataTypes.DOUBLE
    },
    STATUS_REG: {
      type: DataTypes.STRING
    },
    CIT_ID: {
      type: DataTypes.STRING
    },
    GENDER_ID: {
      type: DataTypes.STRING
    },
    ROOM_ID: {
      type: DataTypes.DOUBLE
    },
    NUMID_OLD: {
      type: DataTypes.DOUBLE
    },
    DATE_REGIS: {
      type: DataTypes.DATE
    },
    PART: {
      type: DataTypes.DOUBLE
    },
    POST_DATE: {
      type: DataTypes.STRING
    },
    POST_TIME: {
      type: DataTypes.STRING
    },
    LEV_EDU: {
      type: DataTypes.STRING
    },
    GROUP_READ_BEFOR: {
      type: DataTypes.STRING
    },
    BUILD: {
      type: DataTypes.STRING
    },
    GENQRCODE: {
      type: DataTypes.STRING
    },
    PART_DATE: {
      type: DataTypes.STRING
    },
  }, {freezeTableName: true});
  pundit.associate = function(models) {
    // associations can be defined here
  };
  pundit.removeAttribute('id');
  pundit.removeAttribute('createdAt');
  pundit.removeAttribute('updatedAt');
  

  // define the table's name

  return pundit;
};