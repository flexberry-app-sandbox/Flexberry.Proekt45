package Proekt_45.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt_45.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Расписание
 */
@Entity(name = "IISProekt_45Расписание")
@Table(schema = "public", name = "Расписание")
public class Raspisanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ПериодОт")
    private String периодот;

    @Column(name = "ПериодДо")
    private String периоддо;

    @Column(name = "Урок")
    private String урок;


    public Raspisanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПериодОт() {
      return периодот;
    }

    public void setПериодОт(String периодот) {
      this.периодот = периодот;
    }

    public String getПериодДо() {
      return периоддо;
    }

    public void setПериодДо(String периоддо) {
      this.периоддо = периоддо;
    }

    public String getУрок() {
      return урок;
    }

    public void setУрок(String урок) {
      this.урок = урок;
    }


}