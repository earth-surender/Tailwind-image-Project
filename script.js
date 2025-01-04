function setupImagePreview(id) {
  const dropZone = document.getElementById(`drop-zone-${id}`);
  const fileInput = document.getElementById(`fileInput-${id}`);
  const imagePreview = document.getElementById(`image-preview-${id}`);
  const placeholderDropText = document.getElementById(`placeholder-drop-${id}`);
  const placeholderText = document.getElementById(`placeholder-text-${id}`);
  const modalImagePreview = document.getElementById(`image-preview-${id}-modal`);
  const modalPlaceholderText = document.getElementById(`placeholder-text-${id}-modal`);
  const charCount = document.getElementById(`char-count-${id}`);
  const imageSize = document.getElementById(`image-size-${id}`);
  const deleteBtn = document.getElementById(`delete-${id}`);

  dropZone.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 2 * 1024 * 1024) {
        alert("ไฟล์มีขนาดใหญ่เกิน 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          imagePreview.style.backgroundImage = `url(${e.target.result})`;
          imagePreview.style.backgroundSize = "contain";
          imagePreview.style.backgroundRepeat = "no-repeat";
          imagePreview.style.backgroundColor = "white";
          
          modalImagePreview.style.backgroundImage = `url(${e.target.result})`; // แสดงภาพใน modal
          modalImagePreview.style.backgroundSize = "contain";
          modalImagePreview.style.backgroundRepeat = "no-repeat";
          modalImagePreview.style.backgroundColor = "white";
          
          placeholderText.style.display = "none";
          modalPlaceholderText.style.display = "none";
          imageSize.textContent = `ขนาดภาพ: ${img.width}px x ${img.height}px`; // แสดงขนาดภาพในพิกเซล
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("bg-blue-200", "shadow-lg", "border-white");
    placeholderDropText.textContent = "ปล่อยไฟล์เพื่ออัปโหลด";
    placeholderDropText.style.color = "white";
  });

  dropZone.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dropZone.classList.remove("bg-blue-200", "shadow-lg", "border-white");
    placeholderDropText.textContent = "คลิกเพื่อเลือกไฟล์";
    placeholderDropText.style.color = "";
  });

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("bg-blue-200", "shadow-lg", "border-white");
    placeholderDropText.textContent = "คลิกเพื่อเลือกไฟล์";
    placeholderDropText.style.color = "";

    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 2 * 1024 * 1024) {
        alert("ไฟล์มีขนาดใหญ่เกิน 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          imagePreview.style.backgroundImage = `url(${e.target.result})`;
          imagePreview.style.backgroundSize = "contain";
          imagePreview.style.backgroundRepeat = "no-repeat";
          imagePreview.style.backgroundColor = "white";
          
          modalImagePreview.style.backgroundImage = `url(${e.target.result})`; // แสดงภาพใน modal
          modalImagePreview.style.backgroundSize = "contain";
          modalImagePreview.style.backgroundRepeat = "no-repeat";
          modalImagePreview.style.backgroundColor = "white";
          
          placeholderText.style.display = "none";
          modalPlaceholderText.style.display = "none";
          imageSize.textContent = `ขนาดภาพ: ${img.width}px x ${img.height}px`; // แสดงขนาดภาพในพิกเซล
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  deleteBtn.addEventListener("click", () => {
    imagePreview.style.backgroundImage = "";
    modalImagePreview.style.backgroundImage = ""; // ลบภาพใน modal
    placeholderText.style.display = "flex";
    modalPlaceholderText.style.display = "flex";
    placeholderDropText.textContent = "วางไฟล์ที่นี่หรือคลิกเพื่อเลือกไฟล์";
    fileInput.value = '';
    charCount.textContent = '';
    imageSize.textContent = '';
  });

  fileInput.addEventListener("input", (event) => {
    const imageUrl = event.target.value;
    charCount.textContent = `จำนวนตัวอักษร: ${imageUrl.length}`;
  });
}

// เรียกใช้ฟังก์ชันสำหรับแต่ละส่วน
["A", "B", "C", "D", "E"].forEach((id) => setupImagePreview(id));

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const openModalButton = document.getElementById('openModalButton');
  const closeModalButton = document.getElementById('closeModalBtn');

  // เปิด Modal
  openModalButton.addEventListener('click', function () {
    modal.classList.remove('hidden-modal');
  });

  // ปิด Modal
  closeModalButton.addEventListener('click', function () {
    modal.classList.add('hidden-modal');
  });

  // ปิด Modal เมื่อคลิกนอกพื้นที่ Modal
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.add('hidden-modal');
    }
  });
});
