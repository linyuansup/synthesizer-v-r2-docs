<template><p>修改菜单内容如下</p>
<p><img src="/synthesizer-v-r2-docs/2/2.13.png" alt="修改菜单"></p>
<h2 id="插入歌词" tabindex="-1"><a class="header-anchor" href="#插入歌词" aria-hidden="true">#</a> 插入歌词</h2>
<p>在当前音符组范围内插入歌词，对话框如下图，当前选中的歌词会被填入到歌词文本框中，以空格分隔。</p>
<p><img src="/synthesizer-v-r2-docs/2/2.14.png" alt="插入歌词"></p>
<h3 id="规律填充" tabindex="-1"><a class="header-anchor" href="#规律填充" aria-hidden="true">#</a> 规律填充</h3>
<p>循环填入文本框中的歌词到<strong>选定的音符区域</strong>中。换句话说就是从第一个词开始填，填完后再从第一个词开始填，直到所有的选中的音符都被填完。</p>
<h3 id="按字符分割" tabindex="-1"><a class="header-anchor" href="#按字符分割" aria-hidden="true">#</a> 按字符分割</h3>
<p>每个字母分别填入到音符中。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>只有勾选规律填充后，歌词才会<strong>只</strong>填充在选定的音符区域里。如果不勾选规律填充且歌词数量超出选中的音符数量，Synth V 会忽略选定的范围并将歌词填完。</p>
</div>
<h2 id="重置音素" tabindex="-1"><a class="header-anchor" href="#重置音素" aria-hidden="true">#</a> 重置音素</h2>
<p>将选中音符的音素重置为 Synth V 默认的音素。有关音素的内容，请参考 3.2 音符属性</p>
<h2 id="重置音高属性" tabindex="-1"><a class="header-anchor" href="#重置音高属性" aria-hidden="true">#</a> 重置音高属性</h2>
<p>将选中音符的音高属性重置为 Synth V 默认的音高属性。这里的音高属性包括侧边栏音符属性面板中的音高转变、颤音选项。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>重置的内容 <strong>不包括</strong> PIT（音高偏差）</p>
</div>
<h2 id="重置时间和音素" tabindex="-1"><a class="header-anchor" href="#重置时间和音素" aria-hidden="true">#</a> 重置时间和音素</h2>
<p>将选中音符的时间和音素重置为 Synth V 默认的时间和音素。这里的时间和音素包括侧边栏音符属性面板中的时间和音素选项，不包括表现力分组。</p>
<h2 id="简化参数" tabindex="-1"><a class="header-anchor" href="#简化参数" aria-hidden="true">#</a> 简化参数</h2>
<p>简化参数面板中的参数。该操作可减少工程文件的占用空间大小但不显著降低工程质量。需先选中需要简化的参数点才可使用该选项。</p>
<h2 id="创建锚点" tabindex="-1"><a class="header-anchor" href="#创建锚点" aria-hidden="true">#</a> 创建锚点</h2>
<p>在当前选中的每个音符的开头和结尾创建锚点。锚点只会在当前参数面板前置显示的参数中创建。</p>
<h2 id="自动音高调教" tabindex="-1"><a class="header-anchor" href="#自动音高调教" aria-hidden="true">#</a> 自动音高调教</h2>
<p>对当前音符组自动绘制 PIT（音高偏差）。此功能仅对 Pro 版本和部分声库有效。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>有效声库列表待补充</p>
</div>
<h2 id="吸附到网格" tabindex="-1"><a class="header-anchor" href="#吸附到网格" aria-hidden="true">#</a> 吸附到网格</h2>
<p>将选中音符的音符头对齐到最近的网格上并保证音符长度不变，类似于一些宿主的量化功能。网格的间隔取决于在 视图 - 吸附（钢琴卷帘） 菜单中设置的选项。</p>
<h2 id="变调" tabindex="-1"><a class="header-anchor" href="#变调" aria-hidden="true">#</a> 变调</h2>
<p>更改选中的音符的音高。正数代表向上移动几个半音，负数代表向下移动几个半音。</p>
<h2 id="升高-降低-八度" tabindex="-1"><a class="header-anchor" href="#升高-降低-八度" aria-hidden="true">#</a> 升高（降低）八度</h2>
<p>将音高向上（或向下）移动一个八度。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>一个八度为 12 个半音</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>关于音符组的详细信息，请参考 3.4 音符组概述 音符组库</p>
</div>
<h2 id="创建音符组" tabindex="-1"><a class="header-anchor" href="#创建音符组" aria-hidden="true">#</a> 创建音符组</h2>
<p>将当前选中的音符合并为一个音符组，如果当前没有选中的音符则将当前音轨的所有音符合并为一个音符组。</p>
<h2 id="解散音符组" tabindex="-1"><a class="header-anchor" href="#解散音符组" aria-hidden="true">#</a> 解散音符组</h2>
<p>解散当前选中的音符组或当前选中音符所在的音符组。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>根据 Dreamtonics 官方的说法，一些发音等问题通过创建音符组的方式可以解决。（这就是玄学优化吗 hhhhh）</p>
</div>
<Vssue :title="$title" />
</template>
