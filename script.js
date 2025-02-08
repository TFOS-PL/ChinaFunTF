const wordSets = [
    { words: ["我", "喜欢", "喝", "咖啡"], sentence: "我喜欢喝咖啡。" },
    { words: ["他", "在", "学校", "学习"], sentence: "他在学校学习。" },
    { words: ["今天", "天气", "很好"], sentence: "今天天气很好。" },
    { words: ["我们", "去", "公园", "散步"], sentence: "我们去公园散步。" },
    { words: ["她", "会", "说", "中文"], sentence: "她会说中文。" },
    { words: ["这个", "苹果", "很", "甜"], sentence: "这个苹果很甜。" },
    { words: ["你", "想", "吃", "什么"], sentence: "你想吃什么？" },
    { words: ["老师", "在", "教室", "讲课"], sentence: "老师在教室讲课。" },
    { words: ["我", "昨天", "去", "电影院"], sentence: "我昨天去电影院。" },
    { words: ["他", "喜欢", "听", "音乐"], sentence: "他喜欢听音乐。" },
    { words: ["我们", "一起", "学习", "汉语"], sentence: "我们一起学习汉语。" },
    { words: ["这本", "书", "很", "有趣"], sentence: "这本书很有趣。" },
    { words: ["你", "会", "游泳", "吗"], sentence: "你会游泳吗？" },
    { words: ["明天", "我们", "去", "旅游"], sentence: "明天我们去旅游。" },
    { words: ["她", "买了", "一件", "衣服"], sentence: "她买了一件衣服。" },
    { words: ["请", "给我", "一杯", "水"], sentence: "请给我一杯水。" },
    { words: ["他", "每天", "跑步", "锻炼"], sentence: "他每天跑步锻炼。" },
    { words: ["我", "正在", "看", "电视"], sentence: "我正在看电视。" },
    { words: ["你", "喜欢", "看", "电影", "吗"], sentence: "你喜欢看电影吗？" },
    { words: ["这个", "菜", "很好吃"], sentence: "这个菜很好吃。" },
    { words: ["他们", "在", "公园", "玩"], sentence: "他们在公园玩。" },
    { words: ["你", "去过", "北京", "吗"], sentence: "你去过北京吗？" },
    { words: ["今天天气", "比", "昨天", "热"], sentence: "今天天气比昨天热。" },
    { words: ["请", "再说", "一遍"], sentence: "请再说一遍。" },
    { words: ["他", "坐", "公共汽车", "上班"], sentence: "他坐公共汽车上班。" },
    { words: ["你", "怎么", "去", "机场"], sentence: "你怎么去机场？" },
    { words: ["她", "正在", "学习", "汉字"], sentence: "她正在学习汉字。" },
    { words: ["我们", "明天", "见面"], sentence: "我们明天见面。" },
    { words: ["这个", "房子", "很", "大"], sentence: "这个房子很大。" },
    { words: ["你", "喜欢", "什么", "运动"], sentence: "你喜欢什么运动？" },
    { words: ["她", "有", "很多", "朋友"], sentence: "她有很多朋友。" },
    { words: ["我", "觉得", "汉语", "不难"], sentence: "我觉得汉语不难。" },
    { words: ["他们", "正在", "吃", "午饭"], sentence: "他们正在吃午饭。" },
    { words: ["你", "什么时候", "回家"], sentence: "你什么时候回家？" },
    { words: ["这个", "问题", "很", "简单"], sentence: "这个问题很简单。" },
    { words: ["他", "昨天", "买了", "一本书"], sentence: "他昨天买了一本书。" },
    { words: ["我", "想", "去", "中国"], sentence: "我想去中国。" },
    { words: ["你", "会", "弹", "钢琴", "吗"], sentence: "你会弹钢琴吗？" },
    { words: ["我们", "一起", "去", "吃饭"], sentence: "我们一起去吃饭。" }
];

let currentSentence = "";

function generateWords() {
    let randomSet = wordSets[Math.floor(Math.random() * wordSets.length)];
    document.getElementById("words").innerText = randomSet.words.join(" ");
    currentSentence = randomSet.sentence;
    document.getElementById("result").innerText = "";
    document.getElementById("hint").innerText = "";
    document.getElementById("sentenceInput").value = "";
}

function checkSentence() {
    let userSentence = document.getElementById("sentenceInput").value.trim();
    if (userSentence === currentSentence) {
        document.getElementById("result").innerText = "✅ Poprawne zdanie!";
    } else {
        document.getElementById("result").innerText = "❌ Spróbuj ponownie!";
    }
}

function showHint() {
    document.getElementById("hint").innerText = "Poprawne zdanie: " + currentSentence;
}
