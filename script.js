const speechBubble = document.getElementById('speechBubble');
const pushButton = document.getElementById('pushButton');

const quotes = [
    "手遅れになる前に仕事を終わらせなさい", "君も悪くないわね、少しだけだけど", "私が教えてあげなきゃダメなの", "それ、私がやらなきゃいけないの", "普通にやってるだけよ、感動するな",  "ま、まあ、その成果は評価するわ",  "遅刻は許さないから、覚えておいて",  "私の時間を無駄にしないで",  "好きになられても困るからね",  "私を待たせる勇気、評価するわ",  "ちゃんと報告して、次は何をするの",  "私なしでできると思ったの",  "こんな簡単なこともできないの",  "さっさと片付けなさい、忙しいんだから",  "これだけは認めてあげる、お疲れさま",  "何？ありがとうって言ってほしいの",  "必要ないものは捨てなさい、時間も人も",  "好きなようにやれば？でも私の邪魔はしないで",  "そのアイデア、悪くない。採用よ",  "気に入ったわ、君を少しは評価してもいいかし",  "急いで。私は他にもやることがあるのよ",  "失敗したら全部君の責任だから", //...続く
    // 以下、100種類のセリフを追加してください。
];

pushButton.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    speechBubble.textContent = randomQuote;
});
