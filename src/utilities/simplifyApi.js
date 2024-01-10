import { Question, Instrument } from "../utilities/types";

export function simplifyApi(apiResult, apiCall) {
  let instruments = [];
  let qidx = -1;
  apiCall.forEach((i) => {
    let instrument = new Instrument(
      i.instrument_name,
      i.language,
      i.instrument_id,
      i.grouping
    );
    i.questions.forEach((q, index) => {
      qidx++;
      let question = new Question({
        question_index: qidx,
        instrument: instrument,
        instrument_index: index,
        question_text: q.question_text,
        question_no: q.question_no,
        question_intro: q.question_intro,
        options: q.options,
        nearest_match_from_mhc_auto:
          apiResult.questions[qidx].nearest_match_from_mhc_auto,
        topics_auto: apiResult.questions[qidx].topics_auto || [],
        matches: apiResult.matches[qidx].slice(qidx + 1),
      });
      instrument.addQuestion(question);
    });
    instruments.push(instrument);
  });
  return { instruments: instruments };
}
