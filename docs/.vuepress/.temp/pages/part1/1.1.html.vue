<template><h2 id="synthesizer-v-是什么" tabindex="-1"><a class="header-anchor" href="#synthesizer-v-是什么" aria-hidden="true">#</a> Synthesizer V 是什么</h2>
<p>Synthesizer V 是由华侃如创立的 <code>Dreamtonics</code> 公司开发的歌声合成引擎。由于其极强大的歌声合成能力及真实度获得广泛好评。在国内，五维介质代理了 Synthesizer V 的有关事宜。</p>
<h2 id="我该从哪里弄到-synthesizer-v" tabindex="-1"><a class="header-anchor" href="#我该从哪里弄到-synthesizer-v" aria-hidden="true">#</a> 我该从哪里弄到 Synthesizer V</h2>
<p>首先，要使用 Synthesizer V，需要在电脑里安装两类软件。一类是 <code>编辑器</code>，一类是 <code>声库</code>。</p>
<ol>
<li>
<p>编辑器</p>
<p>编辑器是你的基础操作环境。在前期，所有调教操作均是在编辑器内进行的。Synthesizer V 的编辑器分为 <code>Basic</code> 和 <code>Pro</code> 两个版本（Web 版本暂不介绍）。<code>Basic</code> 版本是完全免费的，可以在官网上 <a href="https://synthesizerv.com" target="_blank" rel="noopener noreferrer">下载<OutboundLink/></a>，但存在一些限制；而 <code>Pro</code> 版本则需要付费购买（国内可在淘宝店购买）。两者的具体区别如下表。</p>
<table>
<thead>
<tr>
<th></th>
<th>Basic</th>
<th>Pro</th>
</tr>
</thead>
<tbody>
<tr>
<td>购买价格</td>
<td>免费</td>
<td>649 元</td>
</tr>
<tr>
<td>平台</td>
<td>Windows MacOS Linux</td>
<td>Windows MacOS Linux</td>
</tr>
<tr>
<td>工程音轨数</td>
<td>最多 3 音轨</td>
<td>无限制</td>
</tr>
<tr>
<td>渲染线程数</td>
<td>最多 2 线程</td>
<td>最多 12 线程 <br/>（官方说明为无限制，但实测为最多 12 线程）</td>
</tr>
<tr>
<td>ASIO 音频驱动（非官方说明）</td>
<td>不支持 ASIO</td>
<td>支持 ASIO</td>
</tr>
<tr>
<td>Pit 自动调校</td>
<td>单一的自动调校</td>
<td>支持自定义参数的自动调校</td>
</tr>
<tr>
<td>其他功能</td>
<td>无</td>
<td>替换音素  <br/> 气声分离 <br/> 脚本 ( Lua / JavaScript )<br/>VST3 / AU 插件</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>由于 SynthV 在第二代使用了严格的 VMP 加密技术，目前没有破解。</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">请注意！</p>
<p>Synthesizer V R2 不支持 Windows 7</p>
</div>
</li>
<li>
<p>声库</p>
<p>顾名思义，声库就是 “声音的数据库”。没有声库，编辑器也无法发出声音（这句话是有问题的，但是暂时可以这样理解）。所以，我们需要再安装声库来让编辑器发出声音。</p>
<p>与编辑器不同的是，在声库方面你可以做出很多选择。与真人一样，不同的歌手的声音是不同的，语言也是不同的。因此，你可以根据你的个人喜好选择最喜欢的声库。目前。中文声库有赤羽、海伊、苍穹、诗岸、牧心、星尘 Minus。你可以在 B 站搜索到他们演唱的歌曲来帮助你选择。</p>
<p>与编辑器相同的是，部分声库也是有两个版本的：Lite 版与完整版。Lite 版可以在官网免费 <a href="https://synthesizerv.com" target="_blank" rel="noopener noreferrer">下载<OutboundLink/></a>，完整版则需要付费购买（国内可在淘宝店购买）。完整版具有全部功能，Lite 版与完整版有以下不同：</p>
<ul>
<li>只有单一音阶</li>
<li>无自动 Pit 调教（目前中文完整版声库也不支持）</li>
<li>不可商用</li>
<li><strong>需标注“使用 Lite”</strong></li>
</ul>
</li>
</ol>
<p>在你选择并安装好编辑器和声库后，你就可以开工调教了。</p>
<Vssue :title="$title" />
</template>
