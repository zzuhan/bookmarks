<h2 class="title"><%=name%></h2>
<ul class="link-box-content">
    <% 
        for(var type in categories) {
            var data =  categories[type];
            var thisItems = data['items'];
    %>
    <li class="link-row">
        <h3 class="subtitle"><%=data['name']%></h3>
        <p class="list clearfix">
        <% 
        	thisItems.forEach(function(item){ 
        		item.desc = item.desc || '待补充';
        %>
    		<a href="<%=item.url %>" target="_blank" data-content="<%=item.desc %>">
                <%=item.name %>
    		</a>
        <% }); %>
        </p>
    </li>
    <% } %>

</ul>
