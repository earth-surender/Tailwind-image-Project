function setupImagePreview(id) {
  const imagePreview = document.getElementById(`image-preview-${id}`);
  const placeholderText = document.getElementById(`placeholder-text-${id}`);
  const selectFileText = document.getElementById(`select-file-text-${id}`);
  const imageSize = document.getElementById(`image-size-${id}`);
  const dropZone = document.getElementById(`drop-zone-${id}`);
  const modalImagePreview = document.getElementById(`image-preview-${id}-modal`);
  const deleteBtn = document.getElementById(`delete-${id}`);
  const imageUrlInput = document.getElementById(`image-url-${id}`);
  const charCount = document.getElementById(`char-count-${id}`);

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "";
  document.body.appendChild(fileInput);

  selectFileText.addEventListener("click", () => fileInput.click());

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
          imagePreview.style.backgroundSize = "cover";
          modalImagePreview.style.backgroundImage = `url(${e.target.result})`;
          modalImagePreview.style.backgroundSize = "cover";
          placeholderText.style.display = "none";
          document.getElementById(`placeholder-text-${id}-modal`).style.display = "none";
          imageSize.textContent = `${img.width}px x ${img.height}px`; // แสดงขนาดภาพในพิกเซล
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  imageUrlInput.addEventListener("input", (event) => {
    const imageUrl = event.target.value;
    if (imageUrl) {
      const img = new Image();
      img.onload = () => {
        imagePreview.style.backgroundImage = `url(${imageUrl})`;
        imagePreview.style.backgroundSize = "cover";
        modalImagePreview.style.backgroundImage = `url(${imageUrl})`;
        modalImagePreview.style.backgroundSize = "cover";
        placeholderText.style.display = "none";
        document.getElementById(`placeholder-text-${id}-modal`).style.display = "none";
        imageSize.textContent = `${img.width}px x ${img.height}px`; // แสดงขนาดภาพในพิกเซล
      };
      img.src = imageUrl;
    }
    charCount.textContent = `จำนวนตัวอักษร: ${imageUrl.length}/255`; // นับจำนวนตัวอักษรในลิงก์
  });

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("bg-blue-200", "shadow-lg", "border-white");
  });

  dropZone.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dropZone.classList.remove("bg-blue-200", "shadow-lg", "border-white");
  });

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("bg-blue-200", "shadow-lg", "border-white");

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
          imagePreview.style.backgroundSize = "cover";
          modalImagePreview.style.backgroundImage = `url(${e.target.result})`;
          modalImagePreview.style.backgroundSize = "cover";
          placeholderText.style.display = "none";
          document.getElementById(`placeholder-text-${id}-modal`).style.display = "none";
          imageSize.textContent = `${img.width}px x ${img.height}px`; // แสดงขนาดภาพในพิกเซล
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // ฟังก์ชันการทำงานสำหรับปุ่มถังขยะ
  deleteBtn.addEventListener("click", () => {
    imagePreview.style.backgroundImage = "";
    modalImagePreview.style.backgroundImage = "";
    placeholderText.style.display = "flex";
    document.getElementById(`placeholder-text-${id}-modal`).style.display = "flex";
    imageUrlInput.value = ''; // ล้างลิงก์ที่วางไว้
    charCount.textContent = ''; // ล้างจำนวนตัวอักษร
    imageSize.textContent = ''; // ล้างขนาดของภาพ
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
