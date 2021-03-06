$("button.toggle").click(function() {
    const toggleRow = $(this).closest('tr').next('tr');
    toggleRow.toggle();
});