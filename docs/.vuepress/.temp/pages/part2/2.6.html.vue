<template><p>项目菜单内容如下</p>
<p><img src="/synthesizer-v-r2-docs/2/2.15.png" alt="项目菜单"></p>
<h2 id="当前音轨-静音" tabindex="-1"><a class="header-anchor" href="#当前音轨-静音" aria-hidden="true">#</a> 当前音轨：静音</h2>
<p>在播放时静音当前音轨 (m)，不影响渲染及导出。</p>
<h2 id="当前音轨-独奏" tabindex="-1"><a class="header-anchor" href="#当前音轨-独奏" aria-hidden="true">#</a> 当前音轨：独奏</h2>
<p>打开当前音轨的独奏属性 (s)。
如果有音轨的独奏属性被打开，在播放时只会播放<strong>独奏属性打开</strong>的音轨。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>与一些 DAW 不同，独奏当前音轨不会打开其他音轨的静音选项。</p>
</div>
<h2 id="当前音轨-重置混音设定" tabindex="-1"><a class="header-anchor" href="#当前音轨-重置混音设定" aria-hidden="true">#</a> 当前音轨：重置混音设定</h2>
<p>重置当前音轨的音量至 0db，声像至 0.00 (c).</p>
<h2 id="创建新的音轨-伴奏轨" tabindex="-1"><a class="header-anchor" href="#创建新的音轨-伴奏轨" aria-hidden="true">#</a> 创建新的音轨 / 伴奏轨</h2>
<p>创建新的音轨（用于装载音源）和伴奏轨（用于装载 wav/mp3 音频）</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>除将音频拖入编辑器中外，目前没有其他方法将 wav/mp3 导入到编辑器中。</p>
<p>mp3 的原理导致无法使用采样级定位，这可能会导致你无论如何都无法对轨准确。因此我们强烈建议使用 wav 格式的文件。</p>
<p>在 Basic 编辑器中，当音轨超过 3 个时，你将不能添加新音轨。</p>
</div>
<h2 id="进入音轨" tabindex="-1"><a class="header-anchor" href="#进入音轨" aria-hidden="true">#</a> 进入音轨</h2>
<h3 id="进入上一个音轨" tabindex="-1"><a class="header-anchor" href="#进入上一个音轨" aria-hidden="true">#</a> 进入上一个音轨</h3>
<p>切换到当前选择轨道上方的音轨</p>
<h3 id="进入下一个音轨" tabindex="-1"><a class="header-anchor" href="#进入下一个音轨" aria-hidden="true">#</a> 进入下一个音轨</h3>
<p>切换到当前选择轨道下方的音轨</p>
<p>同时，你还可以根据轨道的名称选择要进入的音轨</p>
<h2 id="音符组-设置声库" tabindex="-1"><a class="header-anchor" href="#音符组-设置声库" aria-hidden="true">#</a> 音符组 - 设置声库</h2>
<p>设置当前选择的音符组使用的声库。如果当前没有选择音符组，则设置当前轨道的默认声库。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>轨道声库与音符组声库是不同的。由于音符组实在是太难解释，而且它并不等同于 VOCALOID 中的序列，我们开设了一个页面介绍专门介绍音符组。详见 3.4 音符组概述 音符组库</p>
</div>
<h2 id="音符组-进入音符组" tabindex="-1"><a class="header-anchor" href="#音符组-进入音符组" aria-hidden="true">#</a> 音符组 - 进入音符组</h2>
<p>切换到当前轨道里的音符组，其中上一个组 / 下一个组与上一个音轨 / 下一个音轨类似。</p>
<p>同时，你还可以根据音符组的名称选择要进入的音符组。</p>
<Vssue :title="$title" /></template>
