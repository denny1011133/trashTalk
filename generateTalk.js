function generateTalk(professions) {
  const target = ['工程師', '設計師', '創業家']
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const professionOptions = ['engineer', 'designer', 'entrepreneur']
  let text = []

  if (professions.profession) {
    const taskIndex = Math.floor(Math.random() * task[professions.profession].length)
    const phraseIndex = Math.floor(Math.random() * phrase.length)
    const profession = professionOptions.find(Option => {
      return professions.profession === Option
    })
    const index = professionOptions.indexOf(profession);
    text.push(`身為一個${target[index]}，`, task[professions.profession][taskIndex], phrase[phraseIndex], '吧~')
    return text.join("")
  }
  return "請先選擇職業"

}
module.exports = generateTalk