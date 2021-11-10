import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shikigami {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  image: string;
  @Column()
  prioritized: string;
  @Column()
  rank: string;
  @Column({ default: false, select: false })
  disable: boolean;
  @Column({ default: false, select: false })
  bluePick: boolean;
  @Column({ default: false, select: false })
  redPick: boolean;
  @Column({ default: false, select: false })
  pickAction: boolean;
  // public toJson() {
  //   return {
  //     name: this.name,
  //     image: this.image,
  //   };
  // }
}
