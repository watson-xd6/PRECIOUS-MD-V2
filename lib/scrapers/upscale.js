const axios = require('axios');
const FormData = require('form-data');
const Jimp = require('jimp');

async function upscale(buffer, size = 2, anime = false) {
	try {
		return await new Promise((resolve, reject) => {
			if (!buffer) return reject("undefined buffer input!");
			if (!Buffer.isBuffer(buffer)) return reject("invalid buffer input");
			if (!/(2|4|6|8|16)/.test(size.toString())) return reject("invalid upscale size!");
			
			Jimp.read(Buffer.from(buffer))
				.then(image => {
					const { width, height } = image.bitmap;
					let newWidth = width * size;
					let newHeight = height * size;
					const form = new FormData();
					form.append("name", "upscale-" + Date.now());
					form.append("imageName", "upscale-" + Date.now());
					form.append("desiredHeight", newHeight.toString());
					form.append("desiredWidth", newWidth.toString());
					form.append("outputFormat", "png");
					form.append("compressionLevel", "none");
					form.append("anime", anime.toString());
					form.append("image_file", buffer, {
						filename: "upscale-" + Date.now() + ".png",
						contentType: 'image/png',
					});
					axios.post("https://api.upscalepics.com/upscale-to-size", form, {
						headers: {
							...form.getHeaders(),
							origin: "https://upscalepics.com",
							referer: "https://upscalepics.com"
						}
					})
					.then(res => {
						const data = res.data;
						if (data.error) return reject("something error from upscaler api!");
						resolve(data.bgRemoved);
					})
					.catch(reject);
				})
				.catch(reject);
		});
	} catch (e) {
		return { status: false, message: e };
	}
}

module.exports = upscale;