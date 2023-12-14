package Proekt_45.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt_45.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: СправУч
 */
@Entity(name = "IISProekt_45СправУч")
@Table(schema = "public", name = "СправУч")
public class SpravUch {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаРожд")
    private Date датарожд;

    @Column(name = "Фио")
    private String фио;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomer")
    @Convert("Nomer")
    @Column(name = "Номер", length = 16, unique = true, nullable = false)
    private UUID _nomerid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomer", insertable = false, updatable = false)
    private Nomer nomer;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "KlassUch")
    @Convert("KlassUch")
    @Column(name = "КлассУч", length = 16, unique = true, nullable = false)
    private UUID _klassuchid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "KlassUch", insertable = false, updatable = false)
    private KlassUch klassuch;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravRod")
    @Convert("SpravRod")
    @Column(name = "СправРод", length = 16, unique = true, nullable = false)
    private UUID _spravrodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravRod", insertable = false, updatable = false)
    private SpravRod spravrod;


    public SpravUch() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаРожд() {
      return датарожд;
    }

    public void setДатаРожд(Date датарожд) {
      this.датарожд = датарожд;
    }

    public String getФио() {
      return фио;
    }

    public void setФио(String фио) {
      this.фио = фио;
    }


}