$(document).ready(function() {
    // Show a project summary in a modal when users tap on a screenshot
    $('#project').on('show.bs.modal', function(event) {
        // Image that triggered the modal
        var img = $(event.relatedTarget);

        // project full name
        var modalTitle = img.attr("alt");

        // project description
        var modalDesc = img.data("about");

        // the modal
        var modal = $(this);

        // set modal title
        modal.find('.modal-title').text(modalTitle);

        // set modal image
        modal.find('.modal-body .project-screenshot').attr("src", img.attr("src"));

        // set modal description
        modal.find('.modal-body .project-summary').text(modalDesc);

    });
});