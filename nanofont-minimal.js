class nF{c=[];write(t,x=0,y=0,p=3,f,z=this.ctx,i,d,w){z.fillStyle=f;for(i of t){[d,w,f]=this.c[i.charCodeAt()]??'00';for(i in d)+d[i]&&z.fillRect(x+i%w*p,y+p*(f+i/w|0),p,p);x+=w*p+p}}async load(f,b='',i,w,h,o){for(w=new DataView(await(await fetch(f)).arrayBuffer()),i=3;i<w.byteLength;b=b+w.getUint8(i++).toString(2).padStart(8,0));for(i=0,f=856;i<95;[w,h,o]=[1,4,7].map(j=>+('0b'+b.slice(w=i*9+j,w+3))+1),this.c[i+32]=[i?b.slice(f,f+=w*h):'',i++?w:w-3,o-1]);}}