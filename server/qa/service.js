import { Knex } from "knex";

// interface Question {
//   id: number,
//   question_body: string,
//   question_date: Date,
//   asker_name: string,
//   question_helpfulness: number,
//   reported: boolean,
//   id_products: number
// }

module.exports = class QuestionsAndAnswers {
  constructor(db) {
    this.db = db;
  }

  getAllQuestionsAndAnswers() {
    return this.db('questions')
      .innerJoin('answers')
      .where('answers.id_questions', 'questions.id');
  }

  getTestFeatures() {
    const allTestFeatures = this.db.select().from('answers');
    return allTestFeatures
      .then((result) => result)
      .catch((err) => { console.log(err); });
  }
};
