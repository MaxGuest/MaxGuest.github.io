document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("netCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points = [];
    const pointCount = 220;
    const maxDistance = 100;
    const maxDisplacement = 20; // Maximum displacement from the base position
    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    function initPoints() {
        for (let i = 0; i < pointCount; i++) {
            const baseX = Math.random() * canvas.width;
            const baseY = Math.random() * canvas.height;
            points.push({
                baseX: baseX,
                baseY: baseY,
                x: baseX,
                y: baseY,
                vx: 0,
                vy: 0
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0, 255, 255, 0.5)";

        points.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.strokeStyle = "rgba(0, 255, 255, 0.2)";
        points.forEach(point => {
            points.forEach(other => {
                const distance = Math.sqrt(
                    (point.x - other.x) ** 2 + (point.y - other.y) ** 2
                );

                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.stroke();
                }
            });
        });
    }

    function animate() {
        points.forEach(point => {
            const dx = mouse.x - point.x;
            const dy = mouse.y - point.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = Math.min(150 / dist, 1);

            point.vx += force * (dx / dist) * 0.2;
            point.vy += force * (dy / dist) * 0.2;

            // Damping to slow down the movement
            point.vx *= 0.9;
            point.vy *= 0.9;

            // Apply velocity to the current position
            point.x += point.vx;
            point.y += point.vy;

            // Restrict the movement within the maxDisplacement radius
            const displacementX = point.x - point.baseX;
            const displacementY = point.y - point.baseY;
            const displacement = Math.sqrt(displacementX * displacementX + displacementY * displacementY);

            if (displacement > maxDisplacement) {
                const angle = Math.atan2(displacementY, displacementX);
                point.x = point.baseX + Math.cos(angle) * maxDisplacement;
                point.y = point.baseY + Math.sin(angle) * maxDisplacement;
                point.vx = 0;
                point.vy = 0;
            }
        });

        draw();
        requestAnimationFrame(animate);
    }

    canvas.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    initPoints();
    animate();
});
