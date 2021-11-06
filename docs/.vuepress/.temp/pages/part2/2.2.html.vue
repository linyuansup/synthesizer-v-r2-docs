<template><p>文件菜单内容如下</p>
<p><img src="/synthesizer-v-r2-docs/2/2.2.png" alt="文件菜单"></p>
<h2 id="新建" tabindex="-1"><a class="header-anchor" href="#新建" aria-hidden="true">#</a> 新建</h2>
<p>新建一个工程。与 After Effect 等软件相同的是，在你打开 sv 的同时就已经新建了一个工程。</p>
<p>如果当前打开的工程有更改，那么则会出现窗口询问是否保存</p>
<ul>
<li>放弃改动：不保存当前的文件并且新建一个工程</li>
<li>取消：取消新建工程并返回当前工程编辑。</li>
</ul>
<p><img src="/synthesizer-v-r2-docs/2/2.8.png" alt="新建弹窗"></p>
<h2 id="打开" tabindex="-1"><a class="header-anchor" href="#打开" aria-hidden="true">#</a> 打开</h2>
<p>打开一个新工程。支持打开 <code>.s5p</code>（第一代 Synth V 工程格式）和 <code>.svp</code>（第二代 Synth V 工程格式）文件。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>打开 <code>.mid</code>、<code>.midi</code>、<code>.vsqx</code>、<code>.vpr</code>、<code>.css</code>、<code>.ust</code> 工程文件请点击 <strong>导入</strong></p>
</div>
<p>如果当前打开的工程有更改，那么则会出现窗口询问是否保存</p>
<ul>
<li>放弃改动：不保存当前的文件并且打开一个工程。</li>
<li>取消：取消新建工程并返回当前工程编辑。</li>
</ul>
<h2 id="最近使用的文件" tabindex="-1"><a class="header-anchor" href="#最近使用的文件" aria-hidden="true">#</a> 最近使用的文件</h2>
<p>展开最近使用的文件列表。点击文件名相当于执行 <strong>打开</strong> 操作。</p>
<h2 id="保存" tabindex="-1"><a class="header-anchor" href="#保存" aria-hidden="true">#</a> 保存</h2>
<p>保存当前文件。如果当前文件从未保存过，将执行 <strong>另存为</strong> 操作。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>早期的 Synth V R2 版本不稳定，崩溃频率可能较高。同时由于 R2 版本没有自动保存功能，每次崩溃都会使未保存的操作全部丢失。因此请及时保存工程文件。</p>
</div>
<h2 id="另存为" tabindex="-1"><a class="header-anchor" href="#另存为" aria-hidden="true">#</a> 另存为</h2>
<p>将当前文件保存为一个新文件。此后的所有操作均会保存在新文件中。</p>
<p>SynthV <strong>不支持</strong> 将当前文件保存为一个新文件并将此后的所有操作均会保存在老文件中。</p>
<h2 id="导入-为音轨" tabindex="-1"><a class="header-anchor" href="#导入-为音轨" aria-hidden="true">#</a> 导入（为音轨）</h2>
<p>打开 <code>.mid</code>、<code>.midi</code>、<code>.vsqx</code>、<code>.vpr</code>、<code>.css</code>、<code>.ust</code> 工程文件（为一个新的音轨）。</p>
<p>如果当前打开的工程有更改，那么则会出现窗口询问是否保存</p>
<ul>
<li>放弃改动：不保存当前的文件并且打开一个工程</li>
<li>取消：取消新建工程并返回当前工程编辑。</li>
</ul>
<p>打开 mid/midi 格式的文件会弹出的对话框。</p>
<p><img src="/synthesizer-v-r2-docs/2/2.9.png" alt="导入 midi"></p>
<ol>
<li>需要导入的音轨。勾选的音轨将作为新音轨导入。</li>
<li>导入的音符个数。</li>
<li>导入音符的音域。</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>Synth V 与 VOCALOID 的 MIDI 标准不同。VOCALOID 中的音高在 Synth V 中会被提高一个八度，如在 VOCALOID 中的 F3 相当于 Synth V 的 F4</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>导入伴奏请参考 2.6 音轨选项</p>
</div>
<h2 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h2>
<h3 id="导出到-midi" tabindex="-1"><a class="header-anchor" href="#导出到-midi" aria-hidden="true">#</a> 导出到 Midi</h3>
<p>将当前工程的音符导出为。mid 文件，不支持导出为。midi 文件。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>由于 Synth V 自身的原因，导出 Midi 时会多出一个空轨道。</p>
</div>
<h3 id="导出当前音符组到-ust" tabindex="-1"><a class="header-anchor" href="#导出当前音符组到-ust" aria-hidden="true">#</a> 导出当前音符组到 UST</h3>
<p>将当前 <strong>音符组</strong> 的内容导出为 UST 文件。</p>
<p>如果你需要导出所有内容到 UST 文件，那么请解散所有音符组。有关音符组的内容，请参考 3.4 音符组概述 音符组库</p>
<Vssue :title="$title" /></template>
