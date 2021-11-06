<template><p>视图菜单内容如下</p>
<p><img src="/synthesizer-v-r2-docs/2/2.11.png" alt="视图菜单"></p>
<h2 id="吸附-编曲-钢琴卷帘" tabindex="-1"><a class="header-anchor" href="#吸附-编曲-钢琴卷帘" aria-hidden="true">#</a> 吸附（编曲/钢琴卷帘）</h2>
<p>控制音符的自动对齐程度，其中编曲吸附对应序列吸附，钢琴卷帘吸附对应音符吸附。</p>
<p>在新版中<code>1/n 个四分音符</code>已被翻译为<code>m 分音符</code>，他们的对应关系如下表：</p>
<table>
<thead>
<tr>
<th>1/n 个四分音符</th>
<th>m 分音符（三连音）</th>
</tr>
</thead>
<tbody>
<tr>
<td>2</td>
<td>8</td>
</tr>
<tr>
<td>4</td>
<td>16</td>
</tr>
<tr>
<td>6</td>
<td>8-三连音</td>
</tr>
<tr>
<td>8</td>
<td>32</td>
</tr>
<tr>
<td>12</td>
<td>16-三连音</td>
</tr>
<tr>
<td>16</td>
<td>64</td>
</tr>
<tr>
<td>24</td>
<td>32-三连音</td>
</tr>
<tr>
<td>32</td>
<td>128</td>
</tr>
</tbody>
</table>
<p>其中关闭吸附后你可以自由调整音符或序列。</p>
<h2 id="多功能编辑工具" tabindex="-1"><a class="header-anchor" href="#多功能编辑工具" aria-hidden="true">#</a> 多功能编辑工具</h2>
<p>鼠标模式。在该模式下你可以进行选择、拖动等操作。该功能对钢琴卷帘面板还是参数面板起作用取决于你上次编辑的面板。</p>
<h2 id="铅笔工具" tabindex="-1"><a class="header-anchor" href="#铅笔工具" aria-hidden="true">#</a> 铅笔工具</h2>
<p>自由绘制模式。在该模式下你可以进行绘制音符/参数、拖动等操作。该功能对钢琴卷帘面板还是参数面板起作用取决于你上次编辑的面板。</p>
<h2 id="直线工具-参数" tabindex="-1"><a class="header-anchor" href="#直线工具-参数" aria-hidden="true">#</a> 直线工具（参数）</h2>
<p>绘制一条直线。本功能仅对参数面板起作用。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>你可能会发现，在直线模式下绘制的参数可能不是一条直线。这是由于 Synth V 的控制点连接方式导致的。关于参数点连接方式，请参考 6.1 顶栏</p>
</div>
<h2 id="直接编辑音高" tabindex="-1"><a class="header-anchor" href="#直接编辑音高" aria-hidden="true">#</a> 直接编辑音高</h2>
<p>在钢琴卷帘窗里直接绘制音高。该功能仅在勾选铅笔工具时起作用。</p>
<h2 id="显示其他轨道的旋律" tabindex="-1"><a class="header-anchor" href="#显示其他轨道的旋律" aria-hidden="true">#</a> 显示其他轨道的旋律</h2>
<p>在钢琴卷帘窗中以一条线段的形式显示其他轨道的音符。线条的颜色取决于音符所在音轨的着色（可在编曲窗口左侧找出），如图。</p>
<p><img src="/synthesizer-v-r2-docs/2/2.12.png" alt="其他轨道音符"></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在第二代 Synth V 中，其他轨道音符的开头位置已无法像 R1 一样明显区分</p>
</div>
<h2 id="侧面板" tabindex="-1"><a class="header-anchor" href="#侧面板" aria-hidden="true">#</a> 侧面板</h2>
<p>侧面板分为音符属性面板、歌声面板、音符组库面板等等，在视图菜单中点击可打开对应面板。有关对应面板的介绍请参考 Part3. 侧边栏</p>
<Vssue :title="$title" /></template>
