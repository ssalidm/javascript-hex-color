class CopyToClipboard {
  // 1. describe and create/initiate the object
  constructor() {
    this.copyIcon = document.getElementById('copy-icon');
    this.colorField = document.getElementById('current-color');
    this.toolTip = document.getElementById('myTooltip');
    this.events();
  }

  // Events
  events() {
    this.copyIcon.addEventListener('click', () => this.copyColor());
    this.copyIcon.addEventListener('mouseout', () => this.mouseOut());
  }

  // Methods
  copyColor() {
    // Select the text field
    this.colorField.select();
    this.colorField.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(this.colorField.value);

    // Show the copied text
    this.toolTip.innerText = 'Copied: ' + this.colorField.value;
  }

  mouseOut() {
    this.toolTip.innerText = 'Copy to clipboard';
  }
}

const copyToClipboard = new CopyToClipboard();
