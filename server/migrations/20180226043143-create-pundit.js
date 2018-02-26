'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pundits', {
      /*id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },*/
      YR_RESIVE: {
        type: Sequelize.STRING
      },
      NUMGEN: {
        type: Sequelize.DOUBLE
      },
      NUMCURR: {
        type: Sequelize.DOUBLE
      },
      NUMREAL: {
        type: Sequelize.DOUBLE
      },
      NUMDIPLOMA: {
        type: Sequelize.DOUBLE
      },
      NUMGROUP: {
        type: Sequelize.DOUBLE
      },
      NUMALL: {
        type: Sequelize.STRING
      },
      READBYBOSS: {
        type: Sequelize.STRING
      },
      NUMROW: {
        type: Sequelize.STRING
      },
      STUDENT_ID: {
        type: Sequelize.STRING
      },
      CREDIT: {
        type: Sequelize.STRING
      },
      MAJOR: {
        type: Sequelize.STRING
      },
      STATUS: {
        type: Sequelize.STRING
      },
      STATUS_RENAME: {
        type: Sequelize.STRING
      },
      PNAME: {
        type: Sequelize.STRING
      },
      NATION_ID: {
        type: Sequelize.STRING
      },
      FNAME: {
        type: Sequelize.STRING
      },
      LNAME: {
        type: Sequelize.STRING
      },
      SELECT_NAME: {
        type: Sequelize.STRING
      },
      FULLNAME: {
        type: Sequelize.STRING
      },
      SN: {
        type: Sequelize.STRING
      },
      SN_YEAR: {
        type: Sequelize.STRING
      },
      GPA: {
        type: Sequelize.STRING
      },
      STATUSREAL: {
        type: Sequelize.STRING
      },
      STATUSREGIS_ID: {
        type: Sequelize.STRING
      },
      NUMROOM: {
        type: Sequelize.DOUBLE
      },
      B_DETAIL: {
        type: Sequelize.STRING
      },
      GROUP_READING: {
        type: Sequelize.DOUBLE
      },
      TMNDATE: {
        type: Sequelize.STRING
      },
      CRUI: {
        type: Sequelize.STRING
      },
      TEA_DETAIL: {
        type: Sequelize.STRING
      },
      BUNDIT_TYPE_ID: {
        type: Sequelize.DOUBLE
      },
      STD_TYPE: {
        type: Sequelize.DOUBLE
      },
      EMPLOYEE_ID: {
        type: Sequelize.STRING
      },
      NOTES: {
        type: Sequelize.STRING
      },
      OLD_STATUS: {
        type: Sequelize.STRING
      },
      OLDMJCODE: {
        type: Sequelize.STRING
      },
      D_FINISH: {
        type: Sequelize.DOUBLE
      },
      M_FINISH: {
        type: Sequelize.STRING
      },
      Y_FINISH: {
        type: Sequelize.DOUBLE
      },
      MASAGEBOX: {
        type: Sequelize.STRING
      },
      PEOPLE_END: {
        type: Sequelize.STRING
      },
      BUNDITSPECIAL: {
        type: Sequelize.DOUBLE
      },
      ASSOCIATED: {
        type: Sequelize.DOUBLE
      },
      STATUS_REG: {
        type: Sequelize.STRING
      },
      CIT_ID: {
        type: Sequelize.STRING
      },
      GENDER_ID: {
        type: Sequelize.STRING
      },
      ROOM_ID: {
        type: Sequelize.DOUBLE
      },
      NUMID_OLD: {
        type: Sequelize.DOUBLE
      },
      DATE_REGIS: {
        type: Sequelize.DATE
      },
      PART: {
        type: Sequelize.DOUBLE
      },
      POST_DATE: {
        type: Sequelize.STRING
      },
      POST_TIME: {
        type: Sequelize.STRING
      },
      LEV_EDU: {
        type: Sequelize.STRING
      },
      GROUP_READ_BEFOR: {
        type: Sequelize.STRING
      },
      BUILD: {
        type: Sequelize.STRING
      },
      GENQRCODE: {
        type: Sequelize.STRING
      },
      PART_DATE: {
        type: Sequelize.STRING
      },
      /*createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }*/
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pundits');
  }
};