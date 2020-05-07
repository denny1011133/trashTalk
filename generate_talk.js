function generate_talk(professions) {
  const target = ['工程師', '設計師', '創業家']
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let text = []
  if (professions.profession === 'engineer') {
    const taskIndex = Math.floor(Math.random() * task.engineer.length)
    const phraseIndex = Math.floor(Math.random() * phrase.length)
    text.push(`身為一個${target[0]}，`, task.engineer[taskIndex], phrase[phraseIndex], '吧~')
  }
  else if (professions.profession === 'designer') {
    const taskIndex = Math.floor(Math.random() * task.designer.length)
    const phraseIndex = Math.floor(Math.random() * phrase.length)
    text.push(`身為一個${target[1]}，`, task.designer[taskIndex], phrase[phraseIndex], '吧~')
  }
  else if (professions.profession === 'entrepreneur') {
    const taskIndex = Math.floor(Math.random() * task.entrepreneur.length)
    const phraseIndex = Math.floor(Math.random() * phrase.length)
    text.push(`身為一個${target[2]}，`, task.entrepreneur[taskIndex], phrase[phraseIndex], '吧~')
  }
  else {
    text.push('請先選擇職業')
  }
  return text.join("")
}
module.exports = generate_talk