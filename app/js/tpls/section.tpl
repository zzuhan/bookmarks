<h2 class="title"><%=name%> </h2>
<p class="description"><%=description%></p>
<ul class="site-list clearfix">
<% 
	items.forEach(function(item){ 
		item.description = item.description || '待补充';
%>
	<li class="site">
		<a href="<%=item.url %>" target="_blank" class="main">
			<h3 class="name"><%=item.name %></h3>
			<p class="desc"><%=item.description %></p>
		</a>
	</li>
<% }); %>
</ul>
