let dev = 'http://ec2-52-83-93-248.cn-northwest-1.compute.amazonaws.com.cn:30001/app/',
	prod = 'http://ec2-52-83-93-248.cn-northwest-1.compute.amazonaws.com.cn:30001/app/';
export default process.env.NODE_ENV === 'development' ? dev : prod;
